package shared

type RoutePoint struct {
	Coordinates []map[string]interface{} `json:"coordinates,omitempty"`
	Type        *string                  `json:"type,omitempty"`
}
