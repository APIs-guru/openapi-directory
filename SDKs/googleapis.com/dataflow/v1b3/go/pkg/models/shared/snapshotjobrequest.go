package shared

type SnapshotJobRequest struct {
	Description     *string `json:"description"`
	Location        *string `json:"location"`
	SnapshotSources *bool   `json:"snapshotSources"`
	TTL             *string `json:"ttl"`
}
