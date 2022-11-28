package shared

// CommitRequest
// The request for Firestore.Commit.
type CommitRequest struct {
	Transaction *string `json:"transaction,omitempty"`
	Writes      []Write `json:"writes,omitempty"`
}
