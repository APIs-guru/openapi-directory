package shared

type GradeCategory struct {
	DefaultGradeDenominator *int32  `json:"defaultGradeDenominator"`
	ID                      *string `json:"id"`
	Name                    *string `json:"name"`
	Weight                  *int32  `json:"weight"`
}
