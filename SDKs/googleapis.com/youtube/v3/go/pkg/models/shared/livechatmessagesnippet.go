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
	AuthorChannelID               *string                                `json:"authorChannelId,omitempty"`
	DisplayMessage                *string                                `json:"displayMessage,omitempty"`
	FanFundingEventDetails        *LiveChatFanFundingEventDetails        `json:"fanFundingEventDetails,omitempty"`
	GiftMembershipReceivedDetails *LiveChatGiftMembershipReceivedDetails `json:"giftMembershipReceivedDetails,omitempty"`
	HasDisplayContent             *bool                                  `json:"hasDisplayContent,omitempty"`
	LiveChatID                    *string                                `json:"liveChatId,omitempty"`
	MemberMilestoneChatDetails    *LiveChatMemberMilestoneChatDetails    `json:"memberMilestoneChatDetails,omitempty"`
	MembershipGiftingDetails      *LiveChatMembershipGiftingDetails      `json:"membershipGiftingDetails,omitempty"`
	MessageDeletedDetails         *LiveChatMessageDeletedDetails         `json:"messageDeletedDetails,omitempty"`
	MessageRetractedDetails       *LiveChatMessageRetractedDetails       `json:"messageRetractedDetails,omitempty"`
	NewSponsorDetails             *LiveChatNewSponsorDetails             `json:"newSponsorDetails,omitempty"`
	PublishedAt                   *time.Time                             `json:"publishedAt,omitempty"`
	SuperChatDetails              *LiveChatSuperChatDetails              `json:"superChatDetails,omitempty"`
	SuperStickerDetails           *LiveChatSuperStickerDetails           `json:"superStickerDetails,omitempty"`
	TextMessageDetails            *LiveChatTextMessageDetails            `json:"textMessageDetails,omitempty"`
	Type                          *LiveChatMessageSnippetTypeEnum        `json:"type,omitempty"`
	UserBannedDetails             *LiveChatUserBannedMessageDetails      `json:"userBannedDetails,omitempty"`
}
