package shared

// Bin
// A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
type Bin struct {
	Density *float64     `json:"density,omitempty"`
	End     *interface{} `json:"end,omitempty"`
	Start   *interface{} `json:"start,omitempty"`
}
