package shared

import (
	"time"
)

type ObReadOffer1DataOfferAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

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
	Amount        *ObReadOffer1DataOfferAmount        `json:"Amount"`
	Description   *string                             `json:"Description"`
	EndDateTime   *time.Time                          `json:"EndDateTime"`
	Fee           *ObReadOffer1DataOfferFee           `json:"Fee"`
	OfferID       *string                             `json:"OfferId"`
	OfferType     *ObReadOffer1DataOfferOfferTypeEnum `json:"OfferType"`
	Rate          *string                             `json:"Rate"`
	StartDateTime *time.Time                          `json:"StartDateTime"`
	Term          *string                             `json:"Term"`
	URL           *string                             `json:"URL"`
	Value         *int64                              `json:"Value"`
}

type ObReadOffer1Data struct {
	Offer []ObReadOffer1DataOffer `json:"Offer"`
}

type ObReadOffer1 struct {
	Data  ObReadOffer1Data `json:"Data"`
	Links *Links           `json:"Links"`
	Meta  *Meta            `json:"Meta"`
}
