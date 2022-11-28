package shared

// CommitResponse
// The response for Firestore.Commit.
type CommitResponse struct {
	CommitTime   *string       `json:"commitTime,omitempty"`
	WriteResults []WriteResult `json:"writeResults,omitempty"`
}
