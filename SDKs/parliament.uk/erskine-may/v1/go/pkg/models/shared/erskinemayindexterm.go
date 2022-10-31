package shared



type ErskineMayIndexTerm struct {
    ChildTerms []ErskineMayIndexTerm `json:"childTerms,omitempty"`
    DisplayAs *string `json:"displayAs,omitempty"`
    ID *int32 `json:"id,omitempty"`
    ParentTerm *ErskineMayIndexTerm `json:"parentTerm,omitempty"`
    References []ErskineMayParagraphSearchResult `json:"references,omitempty"`
    SeeLinks []ErskineMayIndexTermSeeLink `json:"seeLinks,omitempty"`
    Term *string `json:"term,omitempty"`
    
}

