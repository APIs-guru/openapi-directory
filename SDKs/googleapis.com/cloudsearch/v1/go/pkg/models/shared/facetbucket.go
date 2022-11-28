package shared

// FacetBucket
// A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
type FacetBucket struct {
	Count      *int32 `json:"count,omitempty"`
	Percentage *int32 `json:"percentage,omitempty"`
	Value      *Value `json:"value,omitempty"`
}
