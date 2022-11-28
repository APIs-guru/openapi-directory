package shared

// WriteResponse
// The response for Firestore.Write.
type WriteResponse struct {
	CommitTime   *string       `json:"commitTime,omitempty"`
	StreamID     *string       `json:"streamId,omitempty"`
	StreamToken  *string       `json:"streamToken,omitempty"`
	WriteResults []WriteResult `json:"writeResults,omitempty"`
}
