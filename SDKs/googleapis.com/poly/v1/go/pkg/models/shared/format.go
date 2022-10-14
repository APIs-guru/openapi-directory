package shared

type Format struct {
	FormatComplexity *FormatComplexity `json:"formatComplexity,omitempty"`
	FormatType       *string           `json:"formatType,omitempty"`
	Resources        []File            `json:"resources,omitempty"`
	Root             *File             `json:"root,omitempty"`
}
