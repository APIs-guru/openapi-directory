package shared

// RemarketingListShare
// Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
type RemarketingListShare struct {
	Kind                *string  `json:"kind,omitempty"`
	RemarketingListID   *string  `json:"remarketingListId,omitempty"`
	SharedAccountIds    []string `json:"sharedAccountIds,omitempty"`
	SharedAdvertiserIds []string `json:"sharedAdvertiserIds,omitempty"`
}
