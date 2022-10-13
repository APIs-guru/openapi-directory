package shared

type Comment struct {
	Assignment     *Assignment `json:"assignment"`
	MentionedUsers []User      `json:"mentionedUsers"`
	Post           *Post       `json:"post"`
	Suggestion     *Suggestion `json:"suggestion"`
}
