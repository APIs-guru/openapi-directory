package shared

type ListTemplatesResponse struct {
	NextPageToken *string          `json:"nextPageToken,omitempty"`
	Template      []CustomTemplate `json:"template,omitempty"`
}
