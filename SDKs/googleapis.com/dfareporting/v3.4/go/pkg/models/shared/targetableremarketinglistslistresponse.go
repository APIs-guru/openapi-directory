package shared

type TargetableRemarketingListsListResponse struct {
	Kind                       *string                     `json:"kind,omitempty"`
	NextPageToken              *string                     `json:"nextPageToken,omitempty"`
	TargetableRemarketingLists []TargetableRemarketingList `json:"targetableRemarketingLists,omitempty"`
}
