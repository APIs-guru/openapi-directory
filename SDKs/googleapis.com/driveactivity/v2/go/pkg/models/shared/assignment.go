package shared

type AssignmentSubtypeEnum string

const (
	AssignmentSubtypeEnumSubtypeUnspecified AssignmentSubtypeEnum = "SUBTYPE_UNSPECIFIED"
	AssignmentSubtypeEnumAdded              AssignmentSubtypeEnum = "ADDED"
	AssignmentSubtypeEnumDeleted            AssignmentSubtypeEnum = "DELETED"
	AssignmentSubtypeEnumReplyAdded         AssignmentSubtypeEnum = "REPLY_ADDED"
	AssignmentSubtypeEnumReplyDeleted       AssignmentSubtypeEnum = "REPLY_DELETED"
	AssignmentSubtypeEnumResolved           AssignmentSubtypeEnum = "RESOLVED"
	AssignmentSubtypeEnumReopened           AssignmentSubtypeEnum = "REOPENED"
	AssignmentSubtypeEnumReassigned         AssignmentSubtypeEnum = "REASSIGNED"
)

type Assignment struct {
	AssignedUser *User                  `json:"assignedUser"`
	Subtype      *AssignmentSubtypeEnum `json:"subtype"`
}
