package shared

type Card struct {
	CardActions []CardAction `json:"cardActions"`
	Header      *CardHeader  `json:"header"`
	Name        *string      `json:"name"`
	Sections    []Section    `json:"sections"`
}
