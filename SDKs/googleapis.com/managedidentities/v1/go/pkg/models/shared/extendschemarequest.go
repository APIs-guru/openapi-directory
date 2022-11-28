package shared

// ExtendSchemaRequest
// ExtendSchemaRequest is the request message for ExtendSchema method.
type ExtendSchemaRequest struct {
	Description  *string `json:"description,omitempty"`
	FileContents *string `json:"fileContents,omitempty"`
	GcsPath      *string `json:"gcsPath,omitempty"`
}
