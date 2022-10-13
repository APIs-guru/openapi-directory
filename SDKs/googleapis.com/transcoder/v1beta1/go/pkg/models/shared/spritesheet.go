package shared

type SpriteSheet struct {
	ColumnCount        *int32  `json:"columnCount"`
	EndTimeOffset      *string `json:"endTimeOffset"`
	FilePrefix         *string `json:"filePrefix"`
	Format             *string `json:"format"`
	Interval           *string `json:"interval"`
	Quality            *int32  `json:"quality"`
	RowCount           *int32  `json:"rowCount"`
	SpriteHeightPixels *int32  `json:"spriteHeightPixels"`
	SpriteWidthPixels  *int32  `json:"spriteWidthPixels"`
	StartTimeOffset    *string `json:"startTimeOffset"`
	TotalCount         *int32  `json:"totalCount"`
}
