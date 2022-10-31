package shared

type GradeCategory struct {
	DefaultGradeDenominator *int32  `json:"defaultGradeDenominator,omitempty"`
	ID                      *string `json:"id,omitempty"`
	Name                    *string `json:"name,omitempty"`
	Weight                  *int32  `json:"weight,omitempty"`
}
