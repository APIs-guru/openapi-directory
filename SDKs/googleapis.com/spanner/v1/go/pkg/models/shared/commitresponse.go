package shared

type CommitResponse struct {
	CommitStats     *CommitStats `json:"commitStats,omitempty"`
	CommitTimestamp *string      `json:"commitTimestamp,omitempty"`
}
