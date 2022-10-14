package shared

type ExtendSchemaRequest struct {
	Description  *string `json:"description,omitempty"`
	FileContents *string `json:"fileContents,omitempty"`
	GcsPath      *string `json:"gcsPath,omitempty"`
}
