package shared

type ListOtherContactsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	NextSyncToken *string  `json:"nextSyncToken,omitempty"`
	OtherContacts []Person `json:"otherContacts,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
