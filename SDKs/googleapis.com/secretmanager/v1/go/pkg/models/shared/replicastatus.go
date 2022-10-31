package shared



type ReplicaStatus struct {
    CustomerManagedEncryption *CustomerManagedEncryptionStatus `json:"customerManagedEncryption,omitempty"`
    Location *string `json:"location,omitempty"`
    
}

