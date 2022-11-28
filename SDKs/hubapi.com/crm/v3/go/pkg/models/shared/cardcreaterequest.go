package shared

// CardCreateRequest
// State of card definition to be created
type CardCreateRequest struct {
	Actions CardActions     `json:"actions"`
	Display CardDisplayBody `json:"display"`
	Fetch   CardFetchBody   `json:"fetch"`
	Title   string          `json:"title"`
}
