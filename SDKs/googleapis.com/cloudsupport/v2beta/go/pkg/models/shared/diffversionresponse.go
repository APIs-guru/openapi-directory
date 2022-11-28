package shared

// DiffVersionResponse
// # gdata.* are outside protos with mising documentation
type DiffVersionResponse struct {
	ObjectSizeBytes *string `json:"objectSizeBytes,omitempty"`
	ObjectVersion   *string `json:"objectVersion,omitempty"`
}
