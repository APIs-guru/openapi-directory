package shared

type ChildLink struct {
	ChildIndex *int32  `json:"childIndex"`
	Type       *string `json:"type"`
	Variable   *string `json:"variable"`
}
