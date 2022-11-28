package shared

// GoogleCloudDatacatalogV1ListPolicyTagsResponse
// Response message for ListPolicyTags.
type GoogleCloudDatacatalogV1ListPolicyTagsResponse struct {
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
	PolicyTags    []GoogleCloudDatacatalogV1PolicyTag `json:"policyTags,omitempty"`
}
