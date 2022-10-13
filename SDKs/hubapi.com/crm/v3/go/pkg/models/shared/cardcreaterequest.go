package shared

type CardCreateRequest struct {
	Actions CardActions     `json:"actions"`
	Display CardDisplayBody `json:"display"`
	Fetch   CardFetchBody   `json:"fetch"`
	Title   string          `json:"title"`
}
