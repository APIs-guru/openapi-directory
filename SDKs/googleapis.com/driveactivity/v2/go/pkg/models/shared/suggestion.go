package shared

type SuggestionSubtypeEnum string

const (
	SuggestionSubtypeEnumSubtypeUnspecified SuggestionSubtypeEnum = "SUBTYPE_UNSPECIFIED"
	SuggestionSubtypeEnumAdded              SuggestionSubtypeEnum = "ADDED"
	SuggestionSubtypeEnumDeleted            SuggestionSubtypeEnum = "DELETED"
	SuggestionSubtypeEnumReplyAdded         SuggestionSubtypeEnum = "REPLY_ADDED"
	SuggestionSubtypeEnumReplyDeleted       SuggestionSubtypeEnum = "REPLY_DELETED"
	SuggestionSubtypeEnumAccepted           SuggestionSubtypeEnum = "ACCEPTED"
	SuggestionSubtypeEnumRejected           SuggestionSubtypeEnum = "REJECTED"
	SuggestionSubtypeEnumAcceptDeleted      SuggestionSubtypeEnum = "ACCEPT_DELETED"
	SuggestionSubtypeEnumRejectDeleted      SuggestionSubtypeEnum = "REJECT_DELETED"
)

type Suggestion struct {
	Subtype *SuggestionSubtypeEnum `json:"subtype,omitempty"`
}
