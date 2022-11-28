package shared

// DemoteMasterContext
// Database instance demote primary instance context.
type DemoteMasterContext struct {
	Kind                  *string                    `json:"kind,omitempty"`
	MasterInstanceName    *string                    `json:"masterInstanceName,omitempty"`
	ReplicaConfiguration  *DemoteMasterConfiguration `json:"replicaConfiguration,omitempty"`
	SkipReplicationSetup  *bool                      `json:"skipReplicationSetup,omitempty"`
	VerifyGtidConsistency *bool                      `json:"verifyGtidConsistency,omitempty"`
}
