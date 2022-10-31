package shared



type ListReplicationCyclesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ReplicationCycles []ReplicationCycle `json:"replicationCycles,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

