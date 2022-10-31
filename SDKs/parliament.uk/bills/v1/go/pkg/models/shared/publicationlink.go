package shared

type PublicationLink struct {
	ContentType *string `json:"contentType,omitempty"`
	ID          *int32  `json:"id,omitempty"`
	Title       *string `json:"title,omitempty"`
	URL         *string `json:"url,omitempty"`
}
