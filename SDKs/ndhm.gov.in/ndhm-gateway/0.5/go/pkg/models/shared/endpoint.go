package shared

type Endpoint struct {
	Address        *string `json:"address"`
	ConnectionType *string `json:"connectionType"`
	Use            *string `json:"use"`
}
