package shared




type LiveChatUserBannedMessageDetailsBanTypeEnum string

const (
    LiveChatUserBannedMessageDetailsBanTypeEnumPermanent LiveChatUserBannedMessageDetailsBanTypeEnum = "permanent"
LiveChatUserBannedMessageDetailsBanTypeEnumTemporary LiveChatUserBannedMessageDetailsBanTypeEnum = "temporary"
)


type LiveChatUserBannedMessageDetails struct {
    BanDurationSeconds *string `json:"banDurationSeconds,omitempty"`
    BanType *LiveChatUserBannedMessageDetailsBanTypeEnum `json:"banType,omitempty"`
    BannedUserDetails *ChannelProfileDetails `json:"bannedUserDetails,omitempty"`
    
}

