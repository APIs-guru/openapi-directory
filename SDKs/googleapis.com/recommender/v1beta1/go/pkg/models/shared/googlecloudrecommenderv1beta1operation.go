package shared

type GoogleCloudRecommenderV1beta1Operation struct {
	Action            *string                                              `json:"action,omitempty"`
	Path              *string                                              `json:"path,omitempty"`
	PathFilters       map[string]interface{}                               `json:"pathFilters,omitempty"`
	PathValueMatchers map[string]GoogleCloudRecommenderV1beta1ValueMatcher `json:"pathValueMatchers,omitempty"`
	Resource          *string                                              `json:"resource,omitempty"`
	ResourceType      *string                                              `json:"resourceType,omitempty"`
	SourcePath        *string                                              `json:"sourcePath,omitempty"`
	SourceResource    *string                                              `json:"sourceResource,omitempty"`
	Value             *interface{}                                         `json:"value,omitempty"`
	ValueMatcher      *GoogleCloudRecommenderV1beta1ValueMatcher           `json:"valueMatcher,omitempty"`
}
