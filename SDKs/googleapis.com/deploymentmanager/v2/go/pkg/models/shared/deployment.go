package shared

type Deployment struct {
	Description *string                `json:"description"`
	Fingerprint *string                `json:"fingerprint"`
	ID          *string                `json:"id"`
	InsertTime  *string                `json:"insertTime"`
	Labels      []DeploymentLabelEntry `json:"labels"`
	Manifest    *string                `json:"manifest"`
	Name        *string                `json:"name"`
	Operation   *Operation             `json:"operation"`
	SelfLink    *string                `json:"selfLink"`
	Target      *TargetConfiguration   `json:"target"`
	Update      *DeploymentUpdate      `json:"update"`
	UpdateTime  *string                `json:"updateTime"`
}
