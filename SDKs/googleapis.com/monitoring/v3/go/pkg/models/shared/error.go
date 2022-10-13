package shared

type Error struct {
	PointCount *int32  `json:"pointCount"`
	Status     *Status `json:"status"`
}
