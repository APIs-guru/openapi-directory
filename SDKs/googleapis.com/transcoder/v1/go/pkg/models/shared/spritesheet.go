package shared

type SpriteSheet struct {
	ColumnCount        *int32  `json:"columnCount,omitempty"`
	EndTimeOffset      *string `json:"endTimeOffset,omitempty"`
	FilePrefix         *string `json:"filePrefix,omitempty"`
	Format             *string `json:"format,omitempty"`
	Interval           *string `json:"interval,omitempty"`
	Quality            *int32  `json:"quality,omitempty"`
	RowCount           *int32  `json:"rowCount,omitempty"`
	SpriteHeightPixels *int32  `json:"spriteHeightPixels,omitempty"`
	SpriteWidthPixels  *int32  `json:"spriteWidthPixels,omitempty"`
	StartTimeOffset    *string `json:"startTimeOffset,omitempty"`
	TotalCount         *int32  `json:"totalCount,omitempty"`
}
