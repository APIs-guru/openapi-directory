package shared



type RrSetRoutingPolicy struct {
    Geo *RrSetRoutingPolicyGeoPolicy `json:"geo,omitempty"`
    GeoPolicy *RrSetRoutingPolicyGeoPolicy `json:"geoPolicy,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PrimaryBackup *RrSetRoutingPolicyPrimaryBackupPolicy `json:"primaryBackup,omitempty"`
    Wrr *RrSetRoutingPolicyWrrPolicy `json:"wrr,omitempty"`
    WrrPolicy *RrSetRoutingPolicyWrrPolicy `json:"wrrPolicy,omitempty"`
    
}

