package shared

type NameMatchCandidatesOut struct {
	FirstName       *string                 `json:"firstName"`
	ID              *string                 `json:"id"`
	LastName        *string                 `json:"lastName"`
	MatchCandidates []NameMatchCandidateOut `json:"matchCandidates"`
	OrderOption     *string                 `json:"orderOption"`
	Script          *string                 `json:"script"`
}
