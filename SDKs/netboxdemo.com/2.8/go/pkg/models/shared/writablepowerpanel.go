package shared



type WritablePowerPanel struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    PowerfeedCount *int64 `json:"powerfeed_count,omitempty"`
    RackGroup *int64 `json:"rack_group,omitempty"`
    Site int64 `json:"site"`
    
}

