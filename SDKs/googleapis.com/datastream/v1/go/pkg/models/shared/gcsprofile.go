package shared

type GcsProfile struct {
	Bucket   *string `json:"bucket"`
	RootPath *string `json:"rootPath"`
}
