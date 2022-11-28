package shared

// Member
// A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
type Member struct {
	Etag    *string        `json:"etag,omitempty"`
	Kind    *string        `json:"kind,omitempty"`
	Snippet *MemberSnippet `json:"snippet,omitempty"`
}
