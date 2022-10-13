package shared

type ListSnapshotsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Snapshots     []Snapshot `json:"snapshots"`
}
