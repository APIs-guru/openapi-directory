package shared



type ListSnapshotsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Snapshots []Snapshot `json:"snapshots,omitempty"`
    
}

