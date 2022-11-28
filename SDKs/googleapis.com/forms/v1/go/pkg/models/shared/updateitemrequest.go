package shared

// UpdateItemRequestInput
// Update an item in a form.
type UpdateItemRequestInput struct {
	Item       *ItemInput `json:"item,omitempty"`
	Location   *Location  `json:"location,omitempty"`
	UpdateMask *string    `json:"updateMask,omitempty"`
}
