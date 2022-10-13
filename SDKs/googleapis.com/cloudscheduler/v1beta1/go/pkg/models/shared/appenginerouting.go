package shared

type AppEngineRouting struct {
	Host     *string `json:"host"`
	Instance *string `json:"instance"`
	Service  *string `json:"service"`
	Version  *string `json:"version"`
}
