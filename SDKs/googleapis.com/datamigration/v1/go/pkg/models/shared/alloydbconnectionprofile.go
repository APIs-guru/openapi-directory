package shared



type AlloyDbConnectionProfile struct {
    ClusterID *string `json:"clusterId,omitempty"`
    Settings *AlloyDbSettings `json:"settings,omitempty"`
    
}

