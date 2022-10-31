package shared



type FacetResult struct {
    Buckets []FacetBucket `json:"buckets,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    OperatorName *string `json:"operatorName,omitempty"`
    SourceName *string `json:"sourceName,omitempty"`
    
}

