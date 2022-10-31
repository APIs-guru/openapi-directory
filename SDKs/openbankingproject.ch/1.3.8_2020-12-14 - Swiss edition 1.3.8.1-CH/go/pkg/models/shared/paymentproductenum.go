package shared

type PaymentProductEnum string

const (
	PaymentProductEnumDomesticSwissCreditTransfersIsr     PaymentProductEnum = "domestic-swiss-credit-transfers-isr"
	PaymentProductEnumDomesticSwissCreditTransfers        PaymentProductEnum = "domestic-swiss-credit-transfers"
	PaymentProductEnumDomesticSwissCreditTransfersQr      PaymentProductEnum = "domestic-swiss-credit-transfers-qr"
	PaymentProductEnumDomesticSwissForeignCreditTransfers PaymentProductEnum = "domestic-swiss-foreign-credit-transfers"
	PaymentProductEnumSwissSepaCreditTransfers            PaymentProductEnum = "swiss-sepa-credit-transfers"
	PaymentProductEnumSwissCrossBorderCreditTransfers     PaymentProductEnum = "swiss-cross-border-credit-transfers"
	PaymentProductEnumPain001SepaCreditTransfers          PaymentProductEnum = "pain.001-sepa-credit-transfers"
	PaymentProductEnumPain001CrossBorderCreditTransfers   PaymentProductEnum = "pain.001-cross-border-credit-transfers"
	PaymentProductEnumPain001SwissSixCreditTransfers      PaymentProductEnum = "pain.001-swiss-six-credit-transfers"
)
