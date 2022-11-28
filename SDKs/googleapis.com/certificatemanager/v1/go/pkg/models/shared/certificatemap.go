package shared

// CertificateMapInput
// Defines a collection of certificate configurations.
type CertificateMapInput struct {
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
}

// CertificateMap
// Defines a collection of certificate configurations.
type CertificateMap struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	Description *string           `json:"description,omitempty"`
	GclbTargets []GclbTarget      `json:"gclbTargets,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}
