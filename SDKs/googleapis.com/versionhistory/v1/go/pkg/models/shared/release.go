package shared

type Release struct {
	Fraction      *float64  `json:"fraction"`
	FractionGroup *string   `json:"fractionGroup"`
	Name          *string   `json:"name"`
	Serving       *Interval `json:"serving"`
	Version       *string   `json:"version"`
}
