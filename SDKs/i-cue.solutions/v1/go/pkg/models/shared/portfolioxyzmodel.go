package shared

type PortfolioXyzModel struct {
	ID         *string  `json:"id"`
	ThresholdX *float64 `json:"thresholdX"`
	ThresholdY *float64 `json:"thresholdY"`
	ThresholdZ *float64 `json:"thresholdZ"`
	Xyz12      *string  `json:"xyz12"`
	Xyz12Value *float64 `json:"xyz12Value"`
	Xyz6       *string  `json:"xyz6"`
	Xyz6Value  *float64 `json:"xyz6Value"`
	Xyz9       *string  `json:"xyz9"`
	Xyz9Value  *float64 `json:"xyz9Value"`
}
