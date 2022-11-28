package shared

// Release
// A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
type Release struct {
	Fraction      *float64  `json:"fraction,omitempty"`
	FractionGroup *string   `json:"fractionGroup,omitempty"`
	Name          *string   `json:"name,omitempty"`
	Serving       *Interval `json:"serving,omitempty"`
	Version       *string   `json:"version,omitempty"`
}
