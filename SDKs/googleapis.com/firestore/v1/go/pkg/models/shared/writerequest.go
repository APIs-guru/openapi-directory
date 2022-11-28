package shared

// WriteRequest
// The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.
type WriteRequest struct {
	Labels      map[string]string `json:"labels,omitempty"`
	StreamID    *string           `json:"streamId,omitempty"`
	StreamToken *string           `json:"streamToken,omitempty"`
	Writes      []Write           `json:"writes,omitempty"`
}
