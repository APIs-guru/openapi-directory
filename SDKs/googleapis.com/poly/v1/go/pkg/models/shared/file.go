package shared

type File struct {
	ContentType  *string `json:"contentType,omitempty"`
	RelativePath *string `json:"relativePath,omitempty"`
	URL          *string `json:"url,omitempty"`
}
