package shared

import (
	"time"
)

type SuperChatEventSnippet struct {
	AmountMicros         *string                `json:"amountMicros"`
	ChannelID            *string                `json:"channelId"`
	CommentText          *string                `json:"commentText"`
	CreatedAt            *time.Time             `json:"createdAt"`
	Currency             *string                `json:"currency"`
	DisplayString        *string                `json:"displayString"`
	IsSuperStickerEvent  *bool                  `json:"isSuperStickerEvent"`
	MessageType          *int64                 `json:"messageType"`
	SuperStickerMetadata *SuperStickerMetadata  `json:"superStickerMetadata"`
	SupporterDetails     *ChannelProfileDetails `json:"supporterDetails"`
}
