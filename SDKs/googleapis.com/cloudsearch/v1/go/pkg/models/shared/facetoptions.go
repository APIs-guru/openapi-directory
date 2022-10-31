package shared

type FacetOptions struct {
	NumFacetBuckets *int32  `json:"numFacetBuckets,omitempty"`
	ObjectType      *string `json:"objectType,omitempty"`
	OperatorName    *string `json:"operatorName,omitempty"`
	SourceName      *string `json:"sourceName,omitempty"`
}
