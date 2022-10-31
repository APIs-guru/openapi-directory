package shared

type GoogleCloudEssentialcontactsV1ListContactsResponse struct {
	Contacts      []GoogleCloudEssentialcontactsV1Contact `json:"contacts,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
