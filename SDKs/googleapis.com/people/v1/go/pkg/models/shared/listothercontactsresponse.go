package shared

type ListOtherContactsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	NextSyncToken *string  `json:"nextSyncToken"`
	OtherContacts []Person `json:"otherContacts"`
	TotalSize     *int32   `json:"totalSize"`
}
