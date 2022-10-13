package shared

type BeaconAttachment struct {
	AttachmentName    *string  `json:"attachmentName"`
	CreationTimeMs    *string  `json:"creationTimeMs"`
	Data              *string  `json:"data"`
	MaxDistanceMeters *float64 `json:"maxDistanceMeters"`
	NamespacedType    *string  `json:"namespacedType"`
}
