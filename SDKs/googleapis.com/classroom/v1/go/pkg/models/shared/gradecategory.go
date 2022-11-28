package shared

// GradeCategory
// Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
type GradeCategory struct {
	DefaultGradeDenominator *int32  `json:"defaultGradeDenominator,omitempty"`
	ID                      *string `json:"id,omitempty"`
	Name                    *string `json:"name,omitempty"`
	Weight                  *int32  `json:"weight,omitempty"`
}
