package shared

type FacetOptions struct {
	NumFacetBuckets *int32  `json:"numFacetBuckets"`
	ObjectType      *string `json:"objectType"`
	OperatorName    *string `json:"operatorName"`
	SourceName      *string `json:"sourceName"`
}
