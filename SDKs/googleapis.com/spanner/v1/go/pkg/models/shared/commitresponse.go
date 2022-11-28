package shared

// CommitResponse
// The response for Commit.
type CommitResponse struct {
	CommitStats     *CommitStats `json:"commitStats,omitempty"`
	CommitTimestamp *string      `json:"commitTimestamp,omitempty"`
}
