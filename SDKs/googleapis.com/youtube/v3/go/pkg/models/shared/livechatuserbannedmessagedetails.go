package shared

type LiveChatUserBannedMessageDetailsBanTypeEnum string

const (
	LiveChatUserBannedMessageDetailsBanTypeEnumPermanent LiveChatUserBannedMessageDetailsBanTypeEnum = "permanent"
	LiveChatUserBannedMessageDetailsBanTypeEnumTemporary LiveChatUserBannedMessageDetailsBanTypeEnum = "temporary"
)

type LiveChatUserBannedMessageDetails struct {
	BanDurationSeconds *string                                      `json:"banDurationSeconds"`
	BanType            *LiveChatUserBannedMessageDetailsBanTypeEnum `json:"banType"`
	BannedUserDetails  *ChannelProfileDetails                       `json:"bannedUserDetails"`
}
