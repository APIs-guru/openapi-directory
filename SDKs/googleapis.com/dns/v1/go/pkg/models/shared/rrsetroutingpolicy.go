package shared

type RrSetRoutingPolicy struct {
	Geo           *RrSetRoutingPolicyGeoPolicy           `json:"geo"`
	Kind          *string                                `json:"kind"`
	PrimaryBackup *RrSetRoutingPolicyPrimaryBackupPolicy `json:"primaryBackup"`
	Wrr           *RrSetRoutingPolicyWrrPolicy           `json:"wrr"`
}
