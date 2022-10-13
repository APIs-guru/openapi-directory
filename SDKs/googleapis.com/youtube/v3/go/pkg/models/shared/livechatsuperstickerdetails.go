package shared

type LiveChatSuperStickerDetails struct {
	AmountDisplayString  *string               `json:"amountDisplayString"`
	AmountMicros         *string               `json:"amountMicros"`
	Currency             *string               `json:"currency"`
	SuperStickerMetadata *SuperStickerMetadata `json:"superStickerMetadata"`
	Tier                 *int64                `json:"tier"`
}
