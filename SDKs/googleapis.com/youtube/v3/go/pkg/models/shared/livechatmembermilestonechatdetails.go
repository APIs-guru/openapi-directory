package shared

type LiveChatMemberMilestoneChatDetails struct {
	MemberLevelName *string `json:"memberLevelName,omitempty"`
	MemberMonth     *int64  `json:"memberMonth,omitempty"`
	UserComment     *string `json:"userComment,omitempty"`
}
