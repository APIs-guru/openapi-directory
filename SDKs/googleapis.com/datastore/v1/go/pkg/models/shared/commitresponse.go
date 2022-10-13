package shared

type CommitResponse struct {
	CommitTime      *string          `json:"commitTime"`
	IndexUpdates    *int32           `json:"indexUpdates"`
	MutationResults []MutationResult `json:"mutationResults"`
}
