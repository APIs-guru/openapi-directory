package shared

type RecipientDeliveryTypeEnum string

const (
	RecipientDeliveryTypeEnumLink       RecipientDeliveryTypeEnum = "LINK"
	RecipientDeliveryTypeEnumAttachment RecipientDeliveryTypeEnum = "ATTACHMENT"
)

// Recipient
// Represents a recipient.
type Recipient struct {
	DeliveryType *RecipientDeliveryTypeEnum `json:"deliveryType,omitempty"`
	Email        *string                    `json:"email,omitempty"`
	Kind         *string                    `json:"kind,omitempty"`
}
