package shared

type Process struct {
	Crop                *string `json:"crop"`
	Flip                *bool   `json:"flip"`
	Mirror              *bool   `json:"mirror"`
	ProcessingAlgorithm string  `json:"processing_algorithm"`
	Resize              *string `json:"resize"`
	Rotate              *int64  `json:"rotate"`
}
