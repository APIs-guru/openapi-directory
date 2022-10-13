package shared

import (
	"time"
)

type PaymentMethodData struct {
	CardType *string `json:"card_type"`
	Expiry   *string `json:"expiry"`
	LastFour *string `json:"last_four"`
}

type PaymentMethodTypeEnum string

const (
	PaymentMethodTypeEnumCreditCard PaymentMethodTypeEnum = "credit_card"
)

type PaymentMethod struct {
	Created   *time.Time             `json:"created"`
	Data      *PaymentMethodData     `json:"data"`
	IsDefault *bool                  `json:"is_default"`
	Type      *PaymentMethodTypeEnum `json:"type"`
}
