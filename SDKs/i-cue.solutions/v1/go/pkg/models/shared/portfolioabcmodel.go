package shared

type PortfolioAbcModel struct {
	Abc12      *string  `json:"abc12"`
	Abc12Value *float64 `json:"abc12Value"`
	Abc6       *string  `json:"abc6"`
	Abc6Value  *float64 `json:"abc6Value"`
	Abc9       *string  `json:"abc9"`
	Abc9Value  *float64 `json:"abc9Value"`
	ID         *string  `json:"id"`
	ThresholdA *float64 `json:"thresholdA"`
	ThresholdB *float64 `json:"thresholdB"`
	ThresholdC *float64 `json:"thresholdC"`
}
