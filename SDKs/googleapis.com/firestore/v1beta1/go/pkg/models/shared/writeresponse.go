package shared

type WriteResponse struct {
	CommitTime   *string       `json:"commitTime"`
	StreamID     *string       `json:"streamId"`
	StreamToken  *string       `json:"streamToken"`
	WriteResults []WriteResult `json:"writeResults"`
}
