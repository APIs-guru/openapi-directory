package shared

type FacetResult struct {
	Buckets      []FacetBucket `json:"buckets"`
	ObjectType   *string       `json:"objectType"`
	OperatorName *string       `json:"operatorName"`
	SourceName   *string       `json:"sourceName"`
}
