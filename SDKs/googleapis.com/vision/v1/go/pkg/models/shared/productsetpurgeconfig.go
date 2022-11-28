package shared

// ProductSetPurgeConfig
// Config to control which ProductSet contains the Products to be deleted.
type ProductSetPurgeConfig struct {
	ProductSetID *string `json:"productSetId,omitempty"`
}
