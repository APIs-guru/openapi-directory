package shared

type ErskineMayIndexTerm struct {
	ChildTerms []ErskineMayIndexTerm             `json:"childTerms"`
	DisplayAs  *string                           `json:"displayAs"`
	ID         *int32                            `json:"id"`
	ParentTerm *ErskineMayIndexTerm              `json:"parentTerm"`
	References []ErskineMayParagraphSearchResult `json:"references"`
	SeeLinks   []ErskineMayIndexTermSeeLink      `json:"seeLinks"`
	Term       *string                           `json:"term"`
}
