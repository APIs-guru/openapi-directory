package shared

type DocumentResponse struct {
	ID       *string `json:"id"`
	Mimetype *string `json:"mimetype"`
	Size     *int64  `json:"size"`
	URL      *string `json:"url"`
}
