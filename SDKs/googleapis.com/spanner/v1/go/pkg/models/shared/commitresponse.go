package shared

type CommitResponse struct {
	CommitStats     *CommitStats `json:"commitStats"`
	CommitTimestamp *string      `json:"commitTimestamp"`
}
