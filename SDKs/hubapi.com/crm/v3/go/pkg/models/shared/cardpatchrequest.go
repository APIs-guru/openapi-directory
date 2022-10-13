package shared

type CardPatchRequest struct {
	Actions *CardActions        `json:"actions"`
	Display *CardDisplayBody    `json:"display"`
	Fetch   *CardFetchBodyPatch `json:"fetch"`
	Title   *string             `json:"title"`
}
