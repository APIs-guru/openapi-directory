package shared

import (
	"time"
)

type LiveChatMessageSnippetTypeEnum string

const (
	LiveChatMessageSnippetTypeEnumInvalidType                 LiveChatMessageSnippetTypeEnum = "invalidType"
	LiveChatMessageSnippetTypeEnumTextMessageEvent            LiveChatMessageSnippetTypeEnum = "textMessageEvent"
	LiveChatMessageSnippetTypeEnumTombstone                   LiveChatMessageSnippetTypeEnum = "tombstone"
	LiveChatMessageSnippetTypeEnumFanFundingEvent             LiveChatMessageSnippetTypeEnum = "fanFundingEvent"
	LiveChatMessageSnippetTypeEnumChatEndedEvent              LiveChatMessageSnippetTypeEnum = "chatEndedEvent"
	LiveChatMessageSnippetTypeEnumSponsorOnlyModeStartedEvent LiveChatMessageSnippetTypeEnum = "sponsorOnlyModeStartedEvent"
	LiveChatMessageSnippetTypeEnumSponsorOnlyModeEndedEvent   LiveChatMessageSnippetTypeEnum = "sponsorOnlyModeEndedEvent"
	LiveChatMessageSnippetTypeEnumNewSponsorEvent             LiveChatMessageSnippetTypeEnum = "newSponsorEvent"
	LiveChatMessageSnippetTypeEnumMemberMilestoneChatEvent    LiveChatMessageSnippetTypeEnum = "memberMilestoneChatEvent"
	LiveChatMessageSnippetTypeEnumMembershipGiftingEvent      LiveChatMessageSnippetTypeEnum = "membershipGiftingEvent"
	LiveChatMessageSnippetTypeEnumGiftMembershipReceivedEvent LiveChatMessageSnippetTypeEnum = "giftMembershipReceivedEvent"
	LiveChatMessageSnippetTypeEnumMessageDeletedEvent         LiveChatMessageSnippetTypeEnum = "messageDeletedEvent"
	LiveChatMessageSnippetTypeEnumMessageRetractedEvent       LiveChatMessageSnippetTypeEnum = "messageRetractedEvent"
	LiveChatMessageSnippetTypeEnumUserBannedEvent             LiveChatMessageSnippetTypeEnum = "userBannedEvent"
	LiveChatMessageSnippetTypeEnumSuperChatEvent              LiveChatMessageSnippetTypeEnum = "superChatEvent"
	LiveChatMessageSnippetTypeEnumSuperStickerEvent           LiveChatMessageSnippetTypeEnum = "superStickerEvent"
)

type LiveChatMessageSnippet struct {
	AuthorChannelID               *string                                `json:"authorChannelId"`
	DisplayMessage                *string                                `json:"displayMessage"`
	FanFundingEventDetails        *LiveChatFanFundingEventDetails        `json:"fanFundingEventDetails"`
	GiftMembershipReceivedDetails *LiveChatGiftMembershipReceivedDetails `json:"giftMembershipReceivedDetails"`
	HasDisplayContent             *bool                                  `json:"hasDisplayContent"`
	LiveChatID                    *string                                `json:"liveChatId"`
	MemberMilestoneChatDetails    *LiveChatMemberMilestoneChatDetails    `json:"memberMilestoneChatDetails"`
	MembershipGiftingDetails      *LiveChatMembershipGiftingDetails      `json:"membershipGiftingDetails"`
	MessageDeletedDetails         *LiveChatMessageDeletedDetails         `json:"messageDeletedDetails"`
	MessageRetractedDetails       *LiveChatMessageRetractedDetails       `json:"messageRetractedDetails"`
	NewSponsorDetails             *LiveChatNewSponsorDetails             `json:"newSponsorDetails"`
	PublishedAt                   *time.Time                             `json:"publishedAt"`
	SuperChatDetails              *LiveChatSuperChatDetails              `json:"superChatDetails"`
	SuperStickerDetails           *LiveChatSuperStickerDetails           `json:"superStickerDetails"`
	TextMessageDetails            *LiveChatTextMessageDetails            `json:"textMessageDetails"`
	Type                          *LiveChatMessageSnippetTypeEnum        `json:"type"`
	UserBannedDetails             *LiveChatUserBannedMessageDetails      `json:"userBannedDetails"`
}
