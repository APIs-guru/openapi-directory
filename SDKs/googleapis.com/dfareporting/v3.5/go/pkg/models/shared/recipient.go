package shared

type RecipientDeliveryTypeEnum string

const (
	RecipientDeliveryTypeEnumLink       RecipientDeliveryTypeEnum = "LINK"
	RecipientDeliveryTypeEnumAttachment RecipientDeliveryTypeEnum = "ATTACHMENT"
)

type Recipient struct {
	DeliveryType *RecipientDeliveryTypeEnum `json:"deliveryType"`
	Email        *string                    `json:"email"`
	Kind         *string                    `json:"kind"`
}
