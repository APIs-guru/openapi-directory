package shared

type Endpoint struct {
	Address     *string           `json:"address"`
	Annotations map[string]string `json:"annotations"`
	Name        *string           `json:"name"`
	Network     *string           `json:"network"`
	Port        *int32            `json:"port"`
}
