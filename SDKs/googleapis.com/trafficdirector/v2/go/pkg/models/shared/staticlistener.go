package shared

type StaticListener struct {
	LastUpdated *string                `json:"lastUpdated"`
	Listener    map[string]interface{} `json:"listener"`
}
