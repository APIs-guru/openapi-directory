package shared

// Automatic
// A replication policy that replicates the Secret payload without any restrictions.
type Automatic struct {
	CustomerManagedEncryption *CustomerManagedEncryption `json:"customerManagedEncryption,omitempty"`
}
