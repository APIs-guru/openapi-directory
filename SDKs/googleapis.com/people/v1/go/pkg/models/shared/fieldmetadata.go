package shared

type FieldMetadata struct {
	Primary       *bool   `json:"primary"`
	Source        *Source `json:"source"`
	SourcePrimary *bool   `json:"sourcePrimary"`
	Verified      *bool   `json:"verified"`
}
