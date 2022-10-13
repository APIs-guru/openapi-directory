package shared

type RrSetRoutingPolicy struct {
	Geo           *RrSetRoutingPolicyGeoPolicy           `json:"geo"`
	GeoPolicy     *RrSetRoutingPolicyGeoPolicy           `json:"geoPolicy"`
	Kind          *string                                `json:"kind"`
	PrimaryBackup *RrSetRoutingPolicyPrimaryBackupPolicy `json:"primaryBackup"`
	Wrr           *RrSetRoutingPolicyWrrPolicy           `json:"wrr"`
	WrrPolicy     *RrSetRoutingPolicyWrrPolicy           `json:"wrrPolicy"`
}
