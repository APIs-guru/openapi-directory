package shared

type FileComment struct {
	LegacyCommentID    *string    `json:"legacyCommentId,omitempty"`
	LegacyDiscussionID *string    `json:"legacyDiscussionId,omitempty"`
	LinkToDiscussion   *string    `json:"linkToDiscussion,omitempty"`
	Parent             *DriveItem `json:"parent,omitempty"`
}
