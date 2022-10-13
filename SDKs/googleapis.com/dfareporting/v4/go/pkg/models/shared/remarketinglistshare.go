package shared

type RemarketingListShare struct {
	Kind                *string  `json:"kind"`
	RemarketingListID   *string  `json:"remarketingListId"`
	SharedAccountIds    []string `json:"sharedAccountIds"`
	SharedAdvertiserIds []string `json:"sharedAdvertiserIds"`
}
