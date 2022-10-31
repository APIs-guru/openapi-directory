package shared

type FieldMetadata struct {
	Primary       *bool   `json:"primary,omitempty"`
	Source        *Source `json:"source,omitempty"`
	SourcePrimary *bool   `json:"sourcePrimary,omitempty"`
	Verified      *bool   `json:"verified,omitempty"`
}
