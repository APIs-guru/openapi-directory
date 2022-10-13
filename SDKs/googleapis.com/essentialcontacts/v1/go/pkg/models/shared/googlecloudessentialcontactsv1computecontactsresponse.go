package shared

type GoogleCloudEssentialcontactsV1ComputeContactsResponse struct {
	Contacts      []GoogleCloudEssentialcontactsV1Contact `json:"contacts"`
	NextPageToken *string                                 `json:"nextPageToken"`
}
