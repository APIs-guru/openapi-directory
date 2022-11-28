package shared

// RegionCount
// A region with its associated request count.
type RegionCount struct {
	Count  *string `json:"count,omitempty"`
	Label  *string `json:"label,omitempty"`
	Latlng *LatLng `json:"latlng,omitempty"`
}
