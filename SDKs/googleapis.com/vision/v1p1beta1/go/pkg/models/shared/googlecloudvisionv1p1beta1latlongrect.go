package shared

// GoogleCloudVisionV1p1beta1LatLongRect
// Rectangle determined by min and max `LatLng` pairs.
type GoogleCloudVisionV1p1beta1LatLongRect struct {
	MaxLatLng *LatLng `json:"maxLatLng,omitempty"`
	MinLatLng *LatLng `json:"minLatLng,omitempty"`
}
