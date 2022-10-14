package shared

type GcsProfile struct {
	Bucket   *string `json:"bucket,omitempty"`
	RootPath *string `json:"rootPath,omitempty"`
}
