package shared

// AttachmentInfo
// A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.
type AttachmentInfo struct {
	Data              *string  `json:"data,omitempty"`
	MaxDistanceMeters *float64 `json:"maxDistanceMeters,omitempty"`
	NamespacedType    *string  `json:"namespacedType,omitempty"`
}
