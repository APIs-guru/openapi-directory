package shared

type GoogleCloudDatacatalogV1ListPolicyTagsResponse struct {
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
	PolicyTags    []GoogleCloudDatacatalogV1PolicyTag `json:"policyTags,omitempty"`
}
