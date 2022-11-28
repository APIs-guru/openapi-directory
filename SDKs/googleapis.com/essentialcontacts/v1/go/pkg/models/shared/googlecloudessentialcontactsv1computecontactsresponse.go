package shared

// GoogleCloudEssentialcontactsV1ComputeContactsResponse
// Response message for the ComputeContacts method.
type GoogleCloudEssentialcontactsV1ComputeContactsResponse struct {
	Contacts      []GoogleCloudEssentialcontactsV1Contact `json:"contacts,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
