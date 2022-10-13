package shared

type TagList struct {
	Tags                []Tag  `json:"Tags"`
	TotalTaggedImages   *int32 `json:"TotalTaggedImages"`
	TotalUntaggedImages *int32 `json:"TotalUntaggedImages"`
}
