package shared

// Sheet
// A sheet in a spreadsheet.
type Sheet struct {
	BandedRanges       []BandedRange           `json:"bandedRanges,omitempty"`
	BasicFilter        *BasicFilter            `json:"basicFilter,omitempty"`
	Charts             []EmbeddedChart         `json:"charts,omitempty"`
	ColumnGroups       []DimensionGroup        `json:"columnGroups,omitempty"`
	ConditionalFormats []ConditionalFormatRule `json:"conditionalFormats,omitempty"`
	Data               []GridData              `json:"data,omitempty"`
	DeveloperMetadata  []DeveloperMetadata     `json:"developerMetadata,omitempty"`
	FilterViews        []FilterView            `json:"filterViews,omitempty"`
	Merges             []GridRange             `json:"merges,omitempty"`
	Properties         *SheetProperties        `json:"properties,omitempty"`
	ProtectedRanges    []ProtectedRange        `json:"protectedRanges,omitempty"`
	RowGroups          []DimensionGroup        `json:"rowGroups,omitempty"`
	Slicers            []Slicer                `json:"slicers,omitempty"`
}
