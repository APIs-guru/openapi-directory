package shared

// GoogleCloudRecommenderV1beta1Operation
// Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
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
