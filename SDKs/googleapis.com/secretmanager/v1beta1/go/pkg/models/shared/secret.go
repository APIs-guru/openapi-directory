package shared



type Secret struct {
    CreateTime *string `json:"createTime,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Replication *Replication `json:"replication,omitempty"`
    
}

