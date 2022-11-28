package shared

// UpdateBordersRequest
// Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
type UpdateBordersRequest struct {
	Bottom          *Border    `json:"bottom,omitempty"`
	InnerHorizontal *Border    `json:"innerHorizontal,omitempty"`
	InnerVertical   *Border    `json:"innerVertical,omitempty"`
	Left            *Border    `json:"left,omitempty"`
	Range           *GridRange `json:"range,omitempty"`
	Right           *Border    `json:"right,omitempty"`
	Top             *Border    `json:"top,omitempty"`
}
