package shared

type PortfolioXyzModel struct {
	ID         *string  `json:"id,omitempty"`
	ThresholdX *float64 `json:"thresholdX,omitempty"`
	ThresholdY *float64 `json:"thresholdY,omitempty"`
	ThresholdZ *float64 `json:"thresholdZ,omitempty"`
	Xyz12      *string  `json:"xyz12,omitempty"`
	Xyz12Value *float64 `json:"xyz12Value,omitempty"`
	Xyz6       *string  `json:"xyz6,omitempty"`
	Xyz6Value  *float64 `json:"xyz6Value,omitempty"`
	Xyz9       *string  `json:"xyz9,omitempty"`
	Xyz9Value  *float64 `json:"xyz9Value,omitempty"`
}
