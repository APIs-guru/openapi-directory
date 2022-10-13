package shared

type Moderation struct {
	IsMuted   *bool      `json:"isMuted"`
	Moderator *Moderator `json:"moderator"`
	Reason    *string    `json:"reason"`
}
