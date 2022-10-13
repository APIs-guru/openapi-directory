package shared

type Deployment struct {
	Credential  *Credential             `json:"credential"`
	Description *string                 `json:"description"`
	Fingerprint *string                 `json:"fingerprint"`
	ID          *string                 `json:"id"`
	InsertTime  *string                 `json:"insertTime"`
	Labels      []DeploymentLabelEntry  `json:"labels"`
	Manifest    *string                 `json:"manifest"`
	Name        *string                 `json:"name"`
	Operation   *Operation              `json:"operation"`
	Outputs     []DeploymentOutputEntry `json:"outputs"`
	SelfLink    *string                 `json:"selfLink"`
	Target      *TargetConfiguration    `json:"target"`
	Update      *DeploymentUpdate       `json:"update"`
	UpdateTime  *string                 `json:"updateTime"`
}
