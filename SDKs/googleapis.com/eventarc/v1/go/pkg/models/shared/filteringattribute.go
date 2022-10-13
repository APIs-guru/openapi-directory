package shared

type FilteringAttribute struct {
	Attribute            *string `json:"attribute"`
	Description          *string `json:"description"`
	PathPatternSupported *bool   `json:"pathPatternSupported"`
	Required             *bool   `json:"required"`
}
