package shared

// FacetOptions
// Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
type FacetOptions struct {
	NumFacetBuckets *int32  `json:"numFacetBuckets,omitempty"`
	ObjectType      *string `json:"objectType,omitempty"`
	OperatorName    *string `json:"operatorName,omitempty"`
	SourceName      *string `json:"sourceName,omitempty"`
}
