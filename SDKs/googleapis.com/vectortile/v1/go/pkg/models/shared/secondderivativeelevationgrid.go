package shared

type SecondDerivativeElevationGrid struct {
	AltitudeMultiplier *float32 `json:"altitudeMultiplier"`
	ColumnCount        *int32   `json:"columnCount"`
	EncodedData        *string  `json:"encodedData"`
	RowCount           *int32   `json:"rowCount"`
}
