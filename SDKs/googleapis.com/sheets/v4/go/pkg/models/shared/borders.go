package shared

// Borders
// The borders of the cell.
type Borders struct {
	Bottom *Border `json:"bottom,omitempty"`
	Left   *Border `json:"left,omitempty"`
	Right  *Border `json:"right,omitempty"`
	Top    *Border `json:"top,omitempty"`
}
