package shared

type Replica struct {
	CustomerManagedEncryption *CustomerManagedEncryption `json:"customerManagedEncryption"`
	Location                  *string                    `json:"location"`
}
