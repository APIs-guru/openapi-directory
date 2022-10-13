package shared

type Project struct {
	ID            *int64  `json:"id"`
	Name          *string `json:"name"`
	URL           *string `json:"url"`
	URLIdentifier *string `json:"url-identifier"`
}
