package shared

type UpdateBordersRequest struct {
	Bottom          *Border    `json:"bottom,omitempty"`
	InnerHorizontal *Border    `json:"innerHorizontal,omitempty"`
	InnerVertical   *Border    `json:"innerVertical,omitempty"`
	Left            *Border    `json:"left,omitempty"`
	Range           *GridRange `json:"range,omitempty"`
	Right           *Border    `json:"right,omitempty"`
	Top             *Border    `json:"top,omitempty"`
}
