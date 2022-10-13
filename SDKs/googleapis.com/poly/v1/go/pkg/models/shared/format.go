package shared

type Format struct {
	FormatComplexity *FormatComplexity `json:"formatComplexity"`
	FormatType       *string           `json:"formatType"`
	Resources        []File            `json:"resources"`
	Root             *File             `json:"root"`
}
