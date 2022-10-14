package shared

type PaymentMethodFieldsTypeEnum string

const (
	PaymentMethodFieldsTypeEnumManual        PaymentMethodFieldsTypeEnum = "manual"
	PaymentMethodFieldsTypeEnumPaypal        PaymentMethodFieldsTypeEnum = "paypal"
	PaymentMethodFieldsTypeEnumPagseguro     PaymentMethodFieldsTypeEnum = "pagseguro"
	PaymentMethodFieldsTypeEnumMoneybookers  PaymentMethodFieldsTypeEnum = "moneybookers"
	PaymentMethodFieldsTypeEnumWebpayCl      PaymentMethodFieldsTypeEnum = "webpay_cl"
	PaymentMethodFieldsTypeEnumEasypay       PaymentMethodFieldsTypeEnum = "easypay"
	PaymentMethodFieldsTypeEnumEasypaycc     PaymentMethodFieldsTypeEnum = "easypaycc"
	PaymentMethodFieldsTypeEnumEasypayboleto PaymentMethodFieldsTypeEnum = "easypayboleto"
	PaymentMethodFieldsTypeEnumIdealBasic    PaymentMethodFieldsTypeEnum = "ideal_basic"
	PaymentMethodFieldsTypeEnumHipay         PaymentMethodFieldsTypeEnum = "hipay"
	PaymentMethodFieldsTypeEnumKhipu         PaymentMethodFieldsTypeEnum = "khipu"
	PaymentMethodFieldsTypeEnumMercadoPago   PaymentMethodFieldsTypeEnum = "mercado_pago"
	PaymentMethodFieldsTypeEnumIfthenpay     PaymentMethodFieldsTypeEnum = "ifthenpay"
	PaymentMethodFieldsTypeEnumEupago        PaymentMethodFieldsTypeEnum = "eupago"
	PaymentMethodFieldsTypeEnumStripe        PaymentMethodFieldsTypeEnum = "stripe"
	PaymentMethodFieldsTypeEnumPayu          PaymentMethodFieldsTypeEnum = "payu"
	PaymentMethodFieldsTypeEnumServipag      PaymentMethodFieldsTypeEnum = "servipag"
)

type PaymentMethodFields struct {
	ID   *int32                       `json:"id,omitempty"`
	Name *string                      `json:"name,omitempty"`
	Type *PaymentMethodFieldsTypeEnum `json:"type,omitempty"`
}
