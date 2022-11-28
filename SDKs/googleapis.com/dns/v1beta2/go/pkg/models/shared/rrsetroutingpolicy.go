package shared

// RrSetRoutingPolicy
// A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
type RrSetRoutingPolicy struct {
	Geo           *RrSetRoutingPolicyGeoPolicy           `json:"geo,omitempty"`
	GeoPolicy     *RrSetRoutingPolicyGeoPolicy           `json:"geoPolicy,omitempty"`
	Kind          *string                                `json:"kind,omitempty"`
	PrimaryBackup *RrSetRoutingPolicyPrimaryBackupPolicy `json:"primaryBackup,omitempty"`
	Wrr           *RrSetRoutingPolicyWrrPolicy           `json:"wrr,omitempty"`
	WrrPolicy     *RrSetRoutingPolicyWrrPolicy           `json:"wrrPolicy,omitempty"`
}
