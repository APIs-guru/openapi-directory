package shared

type ListTemplatesResponse struct {
	NextPageToken *string          `json:"nextPageToken"`
	Template      []CustomTemplate `json:"template"`
}
