package shared

// CreateItemRequestInput
// Create an item in a form.
type CreateItemRequestInput struct {
	Item     *ItemInput `json:"item,omitempty"`
	Location *Location  `json:"location,omitempty"`
}
