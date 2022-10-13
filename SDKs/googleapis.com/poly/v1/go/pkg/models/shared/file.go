package shared

type File struct {
	ContentType  *string `json:"contentType"`
	RelativePath *string `json:"relativePath"`
	URL          *string `json:"url"`
}
