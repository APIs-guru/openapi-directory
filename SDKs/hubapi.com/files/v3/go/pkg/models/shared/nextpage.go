package shared

type NextPage struct {
	After string  `json:"after"`
	Link  *string `json:"link"`
}
