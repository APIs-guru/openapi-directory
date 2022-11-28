package shared

// GoogleCloudEssentialcontactsV1ListContactsResponse
// Response message for the ListContacts method.
type GoogleCloudEssentialcontactsV1ListContactsResponse struct {
	Contacts      []GoogleCloudEssentialcontactsV1Contact `json:"contacts,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
