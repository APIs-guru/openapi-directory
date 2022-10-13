package shared

type GoogleCloudRecommenderV1beta1Operation struct {
	Action            *string                                              `json:"action"`
	Path              *string                                              `json:"path"`
	PathFilters       map[string]interface{}                               `json:"pathFilters"`
	PathValueMatchers map[string]GoogleCloudRecommenderV1beta1ValueMatcher `json:"pathValueMatchers"`
	Resource          *string                                              `json:"resource"`
	ResourceType      *string                                              `json:"resourceType"`
	SourcePath        *string                                              `json:"sourcePath"`
	SourceResource    *string                                              `json:"sourceResource"`
	Value             *interface{}                                         `json:"value"`
	ValueMatcher      *GoogleCloudRecommenderV1beta1ValueMatcher           `json:"valueMatcher"`
}
