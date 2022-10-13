package shared

type PostSubtypeEnum string

const (
	PostSubtypeEnumSubtypeUnspecified PostSubtypeEnum = "SUBTYPE_UNSPECIFIED"
	PostSubtypeEnumAdded              PostSubtypeEnum = "ADDED"
	PostSubtypeEnumDeleted            PostSubtypeEnum = "DELETED"
	PostSubtypeEnumReplyAdded         PostSubtypeEnum = "REPLY_ADDED"
	PostSubtypeEnumReplyDeleted       PostSubtypeEnum = "REPLY_DELETED"
	PostSubtypeEnumResolved           PostSubtypeEnum = "RESOLVED"
	PostSubtypeEnumReopened           PostSubtypeEnum = "REOPENED"
)

type Post struct {
	Subtype *PostSubtypeEnum `json:"subtype"`
}
