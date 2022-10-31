package shared



type TagList struct {
    Tags []Tag `json:"Tags,omitempty"`
    TotalTaggedImages *int32 `json:"TotalTaggedImages,omitempty"`
    TotalUntaggedImages *int32 `json:"TotalUntaggedImages,omitempty"`
    
}

