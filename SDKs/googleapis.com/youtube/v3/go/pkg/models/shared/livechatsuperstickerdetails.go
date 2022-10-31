package shared



type LiveChatSuperStickerDetails struct {
    AmountDisplayString *string `json:"amountDisplayString,omitempty"`
    AmountMicros *string `json:"amountMicros,omitempty"`
    Currency *string `json:"currency,omitempty"`
    SuperStickerMetadata *SuperStickerMetadata `json:"superStickerMetadata,omitempty"`
    Tier *int64 `json:"tier,omitempty"`
    
}

