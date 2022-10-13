package shared

type AttachmentInfo struct {
	Data              *string  `json:"data"`
	MaxDistanceMeters *float64 `json:"maxDistanceMeters"`
	NamespacedType    *string  `json:"namespacedType"`
}
