package shared

type LiveChatMemberMilestoneChatDetails struct {
	MemberLevelName *string `json:"memberLevelName"`
	MemberMonth     *int64  `json:"memberMonth"`
	UserComment     *string `json:"userComment"`
}
