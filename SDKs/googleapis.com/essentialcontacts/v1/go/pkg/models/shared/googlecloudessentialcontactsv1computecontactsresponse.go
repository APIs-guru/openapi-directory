package shared

type GoogleCloudEssentialcontactsV1ComputeContactsResponse struct {
	Contacts      []GoogleCloudEssentialcontactsV1Contact `json:"contacts,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
