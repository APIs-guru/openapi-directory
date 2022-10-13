package shared

type ExtendSchemaRequest struct {
	Description  *string `json:"description"`
	FileContents *string `json:"fileContents"`
	GcsPath      *string `json:"gcsPath"`
}
