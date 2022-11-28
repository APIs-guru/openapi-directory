package shared

import (
	"time"
)

// ObReadOffer1DataOfferAmount
// Amount of money associated with the offer type.
type ObReadOffer1DataOfferAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObReadOffer1DataOfferFee
// Fee associated with the offer type.
type ObReadOffer1DataOfferFee struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObReadOffer1DataOfferOfferTypeEnum string

const (
	ObReadOffer1DataOfferOfferTypeEnumBalanceTransfer ObReadOffer1DataOfferOfferTypeEnum = "BalanceTransfer"
	ObReadOffer1DataOfferOfferTypeEnumLimitIncrease   ObReadOffer1DataOfferOfferTypeEnum = "LimitIncrease"
	ObReadOffer1DataOfferOfferTypeEnumMoneyTransfer   ObReadOffer1DataOfferOfferTypeEnum = "MoneyTransfer"
	ObReadOffer1DataOfferOfferTypeEnumOther           ObReadOffer1DataOfferOfferTypeEnum = "Other"
	ObReadOffer1DataOfferOfferTypeEnumPromotionalRate ObReadOffer1DataOfferOfferTypeEnum = "PromotionalRate"
)

type ObReadOffer1DataOffer struct {
	AccountID     string                              `json:"AccountId"`
	Amount        *ObReadOffer1DataOfferAmount        `json:"Amount,omitempty"`
	Description   *string                             `json:"Description,omitempty"`
	EndDateTime   *time.Time                          `json:"EndDateTime,omitempty"`
	Fee           *ObReadOffer1DataOfferFee           `json:"Fee,omitempty"`
	OfferID       *string                             `json:"OfferId,omitempty"`
	OfferType     *ObReadOffer1DataOfferOfferTypeEnum `json:"OfferType,omitempty"`
	Rate          *string                             `json:"Rate,omitempty"`
	StartDateTime *time.Time                          `json:"StartDateTime,omitempty"`
	Term          *string                             `json:"Term,omitempty"`
	URL           *string                             `json:"URL,omitempty"`
	Value         *int64                              `json:"Value,omitempty"`
}

type ObReadOffer1Data struct {
	Offer []ObReadOffer1DataOffer `json:"Offer,omitempty"`
}

type ObReadOffer1 struct {
	Data  ObReadOffer1Data `json:"Data"`
	Links *Links           `json:"Links,omitempty"`
	Meta  *Meta            `json:"Meta,omitempty"`
}
