package shared

// ReusableConfig
// A ReusableConfig refers to a managed ReusableConfigValues. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
type ReusableConfig struct {
	CreateTime  *string               `json:"createTime,omitempty"`
	Description *string               `json:"description,omitempty"`
	Labels      map[string]string     `json:"labels,omitempty"`
	Name        *string               `json:"name,omitempty"`
	UpdateTime  *string               `json:"updateTime,omitempty"`
	Values      *ReusableConfigValues `json:"values,omitempty"`
}
