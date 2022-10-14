package shared

import (
	"time"
)

type SuperChatEventSnippet struct {
	AmountMicros         *string                `json:"amountMicros,omitempty"`
	ChannelID            *string                `json:"channelId,omitempty"`
	CommentText          *string                `json:"commentText,omitempty"`
	CreatedAt            *time.Time             `json:"createdAt,omitempty"`
	Currency             *string                `json:"currency,omitempty"`
	DisplayString        *string                `json:"displayString,omitempty"`
	IsSuperStickerEvent  *bool                  `json:"isSuperStickerEvent,omitempty"`
	MessageType          *int64                 `json:"messageType,omitempty"`
	SuperStickerMetadata *SuperStickerMetadata  `json:"superStickerMetadata,omitempty"`
	SupporterDetails     *ChannelProfileDetails `json:"supporterDetails,omitempty"`
}
