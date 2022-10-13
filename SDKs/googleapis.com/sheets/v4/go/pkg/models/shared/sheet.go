package shared

type Sheet struct {
	BandedRanges       []BandedRange           `json:"bandedRanges"`
	BasicFilter        *BasicFilter            `json:"basicFilter"`
	Charts             []EmbeddedChart         `json:"charts"`
	ColumnGroups       []DimensionGroup        `json:"columnGroups"`
	ConditionalFormats []ConditionalFormatRule `json:"conditionalFormats"`
	Data               []GridData              `json:"data"`
	DeveloperMetadata  []DeveloperMetadata     `json:"developerMetadata"`
	FilterViews        []FilterView            `json:"filterViews"`
	Merges             []GridRange             `json:"merges"`
	Properties         *SheetProperties        `json:"properties"`
	ProtectedRanges    []ProtectedRange        `json:"protectedRanges"`
	RowGroups          []DimensionGroup        `json:"rowGroups"`
	Slicers            []Slicer                `json:"slicers"`
}
