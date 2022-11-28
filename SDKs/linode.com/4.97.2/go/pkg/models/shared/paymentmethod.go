package shared

import (
	"time"
)

// PaymentMethodData
// Credit card information.
type PaymentMethodData struct {
	CardType *string `json:"card_type,omitempty"`
	Expiry   *string `json:"expiry,omitempty"`
	LastFour *string `json:"last_four,omitempty"`
}

type PaymentMethodTypeEnum string

const (
	PaymentMethodTypeEnumCreditCard PaymentMethodTypeEnum = "credit_card"
)

// PaymentMethod
// Payment Method Response Object.
type PaymentMethod struct {
	Created   *time.Time             `json:"created,omitempty"`
	Data      *PaymentMethodData     `json:"data,omitempty"`
	IsDefault *bool                  `json:"is_default,omitempty"`
	Type      *PaymentMethodTypeEnum `json:"type,omitempty"`
}
