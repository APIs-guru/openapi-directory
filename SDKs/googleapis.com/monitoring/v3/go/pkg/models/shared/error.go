package shared

// Error
// Detailed information about an error category.
type Error struct {
	PointCount *int32  `json:"pointCount,omitempty"`
	Status     *Status `json:"status,omitempty"`
}
