package shared

type NameMatchCandidatesOut struct {
	FirstName       *string                 `json:"firstName,omitempty"`
	ID              *string                 `json:"id,omitempty"`
	LastName        *string                 `json:"lastName,omitempty"`
	MatchCandidates []NameMatchCandidateOut `json:"matchCandidates,omitempty"`
	OrderOption     *string                 `json:"orderOption,omitempty"`
	Script          *string                 `json:"script,omitempty"`
}
