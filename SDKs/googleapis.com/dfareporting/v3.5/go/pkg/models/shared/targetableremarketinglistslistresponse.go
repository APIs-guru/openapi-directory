package shared

type TargetableRemarketingListsListResponse struct {
	Kind                       *string                     `json:"kind"`
	NextPageToken              *string                     `json:"nextPageToken"`
	TargetableRemarketingLists []TargetableRemarketingList `json:"targetableRemarketingLists"`
}
