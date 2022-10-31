package shared

type RemarketingListsListResponse struct {
	Kind             *string           `json:"kind,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	RemarketingLists []RemarketingList `json:"remarketingLists,omitempty"`
}
