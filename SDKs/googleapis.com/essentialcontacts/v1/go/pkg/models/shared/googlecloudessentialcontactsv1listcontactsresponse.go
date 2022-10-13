package shared

type GoogleCloudEssentialcontactsV1ListContactsResponse struct {
	Contacts      []GoogleCloudEssentialcontactsV1Contact `json:"contacts"`
	NextPageToken *string                                 `json:"nextPageToken"`
}
