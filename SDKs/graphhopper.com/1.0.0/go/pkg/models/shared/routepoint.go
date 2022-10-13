package shared

type RoutePoint struct {
	Coordinates []map[string]interface{} `json:"coordinates"`
	Type        *string                  `json:"type"`
}
