package shared

type ListSnapshotsResponse struct {
	Snapshots []Snapshot `json:"snapshots"`
}
