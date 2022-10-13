package shared

type FacetBucket struct {
	Count      *int32 `json:"count"`
	Percentage *int32 `json:"percentage"`
	Value      *Value `json:"value"`
}
