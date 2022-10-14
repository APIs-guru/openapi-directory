package shared

type Endpoint struct {
	Address     *string           `json:"address,omitempty"`
	Annotations map[string]string `json:"annotations,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Network     *string           `json:"network,omitempty"`
	Port        *int32            `json:"port,omitempty"`
}
