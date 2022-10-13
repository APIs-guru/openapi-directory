package shared

type GoogleCloudDatacatalogV1ListPolicyTagsResponse struct {
	NextPageToken *string                             `json:"nextPageToken"`
	PolicyTags    []GoogleCloudDatacatalogV1PolicyTag `json:"policyTags"`
}
