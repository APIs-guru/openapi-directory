package shared

import (
	"time"
)

type InAppVoice struct {
	AccountID          string                `json:"account_id"`
	CallbackURL        *string               `json:"callback_url"`
	ConversationID     *string               `json:"conversation_id"`
	DateEnd            *time.Time            `json:"date_end"`
	DateStart          *time.Time            `json:"date_start"`
	IncludeSubaccounts *bool                 `json:"include_subaccounts"`
	Product            ProductInAppVoiceEnum `json:"product"`
}
