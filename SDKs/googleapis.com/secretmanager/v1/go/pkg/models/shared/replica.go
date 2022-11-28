package shared

// Replica
// Represents a Replica for this Secret.
type Replica struct {
	CustomerManagedEncryption *CustomerManagedEncryption `json:"customerManagedEncryption,omitempty"`
	Location                  *string                    `json:"location,omitempty"`
}
