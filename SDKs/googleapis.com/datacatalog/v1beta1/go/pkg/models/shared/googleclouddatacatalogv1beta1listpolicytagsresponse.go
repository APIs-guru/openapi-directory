package shared

type GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse struct {
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
	PolicyTags    []GoogleCloudDatacatalogV1beta1PolicyTag `json:"policyTags,omitempty"`
}
