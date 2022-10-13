package shared

type PublicationLink struct {
	ContentType *string `json:"contentType"`
	ID          *int32  `json:"id"`
	Title       *string `json:"title"`
	URL         *string `json:"url"`
}
