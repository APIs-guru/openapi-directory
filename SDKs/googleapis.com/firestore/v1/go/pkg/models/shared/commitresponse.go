package shared

type CommitResponse struct {
	CommitTime   *string       `json:"commitTime"`
	WriteResults []WriteResult `json:"writeResults"`
}
