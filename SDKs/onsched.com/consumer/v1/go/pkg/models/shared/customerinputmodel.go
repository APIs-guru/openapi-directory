package shared

type CustomerInputModel struct {
	Address              *AddressInputModel     `json:"address,omitempty"`
	Contact              *ContactInputModel     `json:"contact,omitempty"`
	CustomFields         *CustomFieldInputModel `json:"customFields,omitempty"`
	Email                *string                `json:"email,omitempty"`
	Firstname            *string                `json:"firstname,omitempty"`
	Lastname             *string                `json:"lastname,omitempty"`
	LocationID           *string                `json:"locationId,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	NotificationType     *string                `json:"notificationType,omitempty"`
	SendLeadNotification *bool                  `json:"sendLeadNotification,omitempty"`
	StripeCustomerID     *string                `json:"stripeCustomerId,omitempty"`
	Type                 *int32                 `json:"type,omitempty"`
}
