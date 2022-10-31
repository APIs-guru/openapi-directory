package shared

type RrSetRoutingPolicy struct {
	Geo           *RrSetRoutingPolicyGeoPolicy           `json:"geo,omitempty"`
	Kind          *string                                `json:"kind,omitempty"`
	PrimaryBackup *RrSetRoutingPolicyPrimaryBackupPolicy `json:"primaryBackup,omitempty"`
	Wrr           *RrSetRoutingPolicyWrrPolicy           `json:"wrr,omitempty"`
}
