package shared

// IntegerList
// A metric value representing a list of integers.
type IntegerList struct {
	Elements []SplitInt64 `json:"elements,omitempty"`
}
