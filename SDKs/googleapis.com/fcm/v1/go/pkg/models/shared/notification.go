package shared

type Notification struct {
	Body  *string `json:"body"`
	Image *string `json:"image"`
	Title *string `json:"title"`
}
