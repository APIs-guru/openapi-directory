package shared

type SnapshotListResponse struct {
	Items         []Snapshot `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}
