package shared

type Links struct {
	DroppedLinksCount *int32 `json:"droppedLinksCount"`
	Link              []Link `json:"link"`
}
