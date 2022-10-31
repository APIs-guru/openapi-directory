package shared



type Settings struct {
    DisableDefaultSink *bool `json:"disableDefaultSink,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    KmsServiceAccountID *string `json:"kmsServiceAccountId,omitempty"`
    Name *string `json:"name,omitempty"`
    StorageLocation *string `json:"storageLocation,omitempty"`
    
}

