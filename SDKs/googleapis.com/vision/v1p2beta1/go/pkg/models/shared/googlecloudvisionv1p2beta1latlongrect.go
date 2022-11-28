package shared

// GoogleCloudVisionV1p2beta1LatLongRect
// Rectangle determined by min and max `LatLng` pairs.
type GoogleCloudVisionV1p2beta1LatLongRect struct {
	MaxLatLng *LatLng `json:"maxLatLng,omitempty"`
	MinLatLng *LatLng `json:"minLatLng,omitempty"`
}
