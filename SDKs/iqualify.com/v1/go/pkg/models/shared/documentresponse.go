package shared

type DocumentResponse struct {
	ID       *string `json:"id,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Size     *int64  `json:"size,omitempty"`
	URL      *string `json:"url,omitempty"`
}
