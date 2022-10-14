package shared

type Error struct {
	PointCount *int32  `json:"pointCount,omitempty"`
	Status     *Status `json:"status,omitempty"`
}
