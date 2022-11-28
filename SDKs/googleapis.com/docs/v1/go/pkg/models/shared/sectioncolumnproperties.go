package shared

// SectionColumnProperties
// Properties that apply to a section's column.
type SectionColumnProperties struct {
	PaddingEnd *Dimension `json:"paddingEnd,omitempty"`
	Width      *Dimension `json:"width,omitempty"`
}
