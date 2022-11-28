package shared

// CheckConsistencyRequest
// Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
type CheckConsistencyRequest struct {
	ConsistencyToken *string `json:"consistencyToken,omitempty"`
}
