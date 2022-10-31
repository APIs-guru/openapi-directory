package shared

type AttachmentInfo struct {
	Data              *string  `json:"data,omitempty"`
	MaxDistanceMeters *float64 `json:"maxDistanceMeters,omitempty"`
	NamespacedType    *string  `json:"namespacedType,omitempty"`
}
