package shared

// ListTopicSnapshotsResponse
// Response for the `ListTopicSnapshots` method.
type ListTopicSnapshotsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Snapshots     []string `json:"snapshots,omitempty"`
}
