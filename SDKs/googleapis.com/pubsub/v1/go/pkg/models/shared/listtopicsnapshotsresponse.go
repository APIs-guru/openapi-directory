package shared

type ListTopicSnapshotsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Snapshots     []string `json:"snapshots"`
}
