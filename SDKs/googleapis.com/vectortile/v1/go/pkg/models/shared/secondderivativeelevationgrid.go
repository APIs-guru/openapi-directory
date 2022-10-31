package shared

type SecondDerivativeElevationGrid struct {
	AltitudeMultiplier *float32 `json:"altitudeMultiplier,omitempty"`
	ColumnCount        *int32   `json:"columnCount,omitempty"`
	EncodedData        *string  `json:"encodedData,omitempty"`
	RowCount           *int32   `json:"rowCount,omitempty"`
}
