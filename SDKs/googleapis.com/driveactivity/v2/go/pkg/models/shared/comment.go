package shared

// Comment
// A change about comments on an object.
type Comment struct {
	Assignment     *Assignment `json:"assignment,omitempty"`
	MentionedUsers []User      `json:"mentionedUsers,omitempty"`
	Post           *Post       `json:"post,omitempty"`
	Suggestion     *Suggestion `json:"suggestion,omitempty"`
}
