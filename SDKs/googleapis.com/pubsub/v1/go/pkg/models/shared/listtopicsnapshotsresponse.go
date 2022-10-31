package shared



type ListTopicSnapshotsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Snapshots []string `json:"snapshots,omitempty"`
    
}

