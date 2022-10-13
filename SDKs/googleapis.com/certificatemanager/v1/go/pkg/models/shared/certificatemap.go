package shared

type CertificateMap struct {
	CreateTime  *string           `json:"createTime"`
	Description *string           `json:"description"`
	GclbTargets []GclbTarget      `json:"gclbTargets"`
	Labels      map[string]string `json:"labels"`
	Name        *string           `json:"name"`
	UpdateTime  *string           `json:"updateTime"`
}
