package shared

type RouteResponsePathInstructions struct {
	Distance   *float64 `json:"distance"`
	ExitNumber *int32   `json:"exit_number"`
	Interval   []int32  `json:"interval"`
	Sign       *int32   `json:"sign"`
	StreetName *string  `json:"street_name"`
	Text       *string  `json:"text"`
	Time       *int32   `json:"time"`
	TurnAngle  *float64 `json:"turn_angle"`
}

type RouteResponsePath struct {
	Ascend           *float64                        `json:"ascend"`
	Bbox             []float64                       `json:"bbox"`
	Descend          *float64                        `json:"descend"`
	Details          map[string]interface{}          `json:"details"`
	Distance         *float64                        `json:"distance"`
	Instructions     []RouteResponsePathInstructions `json:"instructions"`
	Points           map[string]interface{}          `json:"points"`
	PointsEncoded    *bool                           `json:"points_encoded"`
	PointsOrder      []int64                         `json:"points_order"`
	SnappedWaypoints map[string]interface{}          `json:"snapped_waypoints"`
	Time             *int64                          `json:"time"`
}
