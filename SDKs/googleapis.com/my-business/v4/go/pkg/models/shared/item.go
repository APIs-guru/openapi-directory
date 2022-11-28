package shared

// Item
// A single list item. Each variation of an item in the price list should have its own Item with its own price data.
type Item struct {
	ItemID *string `json:"itemId,omitempty"`
	Labels []Label `json:"labels,omitempty"`
	Price  *Money  `json:"price,omitempty"`
}
