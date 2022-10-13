package shared

type UpdateItemRequest struct {
	Item       *Item     `json:"item"`
	Location   *Location `json:"location"`
	UpdateMask *string   `json:"updateMask"`
}
