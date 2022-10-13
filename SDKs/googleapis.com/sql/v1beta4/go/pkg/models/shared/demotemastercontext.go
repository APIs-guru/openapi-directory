package shared

type DemoteMasterContext struct {
	Kind                  *string                    `json:"kind"`
	MasterInstanceName    *string                    `json:"masterInstanceName"`
	ReplicaConfiguration  *DemoteMasterConfiguration `json:"replicaConfiguration"`
	SkipReplicationSetup  *bool                      `json:"skipReplicationSetup"`
	VerifyGtidConsistency *bool                      `json:"verifyGtidConsistency"`
}
