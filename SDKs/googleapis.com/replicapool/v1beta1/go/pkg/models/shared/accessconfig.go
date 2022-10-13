package shared

type AccessConfig struct {
	Name  *string `json:"name"`
	NatIP *string `json:"natIp"`
	Type  *string `json:"type"`
}
