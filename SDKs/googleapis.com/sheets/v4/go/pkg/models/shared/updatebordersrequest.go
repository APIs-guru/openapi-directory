package shared

type UpdateBordersRequest struct {
	Bottom          *Border    `json:"bottom"`
	InnerHorizontal *Border    `json:"innerHorizontal"`
	InnerVertical   *Border    `json:"innerVertical"`
	Left            *Border    `json:"left"`
	Range           *GridRange `json:"range"`
	Right           *Border    `json:"right"`
	Top             *Border    `json:"top"`
}
