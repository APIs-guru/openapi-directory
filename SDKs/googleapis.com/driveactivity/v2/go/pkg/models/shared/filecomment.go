package shared

type FileComment struct {
	LegacyCommentID    *string    `json:"legacyCommentId"`
	LegacyDiscussionID *string    `json:"legacyDiscussionId"`
	LinkToDiscussion   *string    `json:"linkToDiscussion"`
	Parent             *DriveItem `json:"parent"`
}
