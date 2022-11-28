package shared

// CheckConsistencyResponse
// Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
type CheckConsistencyResponse struct {
	Consistent *bool `json:"consistent,omitempty"`
}
