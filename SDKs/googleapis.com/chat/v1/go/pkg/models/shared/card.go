package shared

// Card
// A card is a UI element that can contain UI widgets such as texts, images.
type Card struct {
	CardActions []CardAction `json:"cardActions,omitempty"`
	Header      *CardHeader  `json:"header,omitempty"`
	Name        *string      `json:"name,omitempty"`
	Sections    []Section    `json:"sections,omitempty"`
}
