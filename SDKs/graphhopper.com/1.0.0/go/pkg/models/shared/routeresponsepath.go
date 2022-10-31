package shared

type RouteResponsePathInstructions struct {
	Distance   *float64 `json:"distance,omitempty"`
	ExitNumber *int32   `json:"exit_number,omitempty"`
	Interval   []int32  `json:"interval,omitempty"`
	Sign       *int32   `json:"sign,omitempty"`
	StreetName *string  `json:"street_name,omitempty"`
	Text       *string  `json:"text,omitempty"`
	Time       *int32   `json:"time,omitempty"`
	TurnAngle  *float64 `json:"turn_angle,omitempty"`
}

type RouteResponsePath struct {
	Ascend           *float64                        `json:"ascend,omitempty"`
	Bbox             []float64                       `json:"bbox,omitempty"`
	Descend          *float64                        `json:"descend,omitempty"`
	Details          map[string]interface{}          `json:"details,omitempty"`
	Distance         *float64                        `json:"distance,omitempty"`
	Instructions     []RouteResponsePathInstructions `json:"instructions,omitempty"`
	Points           map[string]interface{}          `json:"points,omitempty"`
	PointsEncoded    *bool                           `json:"points_encoded,omitempty"`
	PointsOrder      []int64                         `json:"points_order,omitempty"`
	SnappedWaypoints map[string]interface{}          `json:"snapped_waypoints,omitempty"`
	Time             *int64                          `json:"time,omitempty"`
}
