package shared

type RemarketingListsListResponse struct {
	Kind             *string           `json:"kind"`
	NextPageToken    *string           `json:"nextPageToken"`
	RemarketingLists []RemarketingList `json:"remarketingLists"`
}
