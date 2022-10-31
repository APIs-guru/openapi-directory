package shared



type RemarketingListShare struct {
    Kind *string `json:"kind,omitempty"`
    RemarketingListID *string `json:"remarketingListId,omitempty"`
    SharedAccountIds []string `json:"sharedAccountIds,omitempty"`
    SharedAdvertiserIds []string `json:"sharedAdvertiserIds,omitempty"`
    
}

