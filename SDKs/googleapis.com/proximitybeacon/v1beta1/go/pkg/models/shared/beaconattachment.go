package shared



type BeaconAttachment struct {
    AttachmentName *string `json:"attachmentName,omitempty"`
    CreationTimeMs *string `json:"creationTimeMs,omitempty"`
    Data *string `json:"data,omitempty"`
    MaxDistanceMeters *float64 `json:"maxDistanceMeters,omitempty"`
    NamespacedType *string `json:"namespacedType,omitempty"`
    
}

