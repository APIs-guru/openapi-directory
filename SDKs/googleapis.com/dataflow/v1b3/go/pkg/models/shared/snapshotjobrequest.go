package shared



type SnapshotJobRequest struct {
    Description *string `json:"description,omitempty"`
    Location *string `json:"location,omitempty"`
    SnapshotSources *bool `json:"snapshotSources,omitempty"`
    TTL *string `json:"ttl,omitempty"`
    
}

