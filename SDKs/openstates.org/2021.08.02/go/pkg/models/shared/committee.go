package shared



type Committee struct {
    Classification CommitteeClassificationEnum `json:"classification"`
    Extras map[string]interface{} `json:"extras"`
    ID string `json:"id"`
    Links []Link `json:"links,omitempty"`
    Memberships []CommitteeMembership `json:"memberships,omitempty"`
    Name string `json:"name"`
    OtherNames []AltName `json:"other_names,omitempty"`
    ParentID string `json:"parent_id"`
    Sources []Link `json:"sources,omitempty"`
    
}

