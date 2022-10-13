package shared

type CustomerInputModel struct {
	Address              *AddressInputModel     `json:"address"`
	Contact              *ContactInputModel     `json:"contact"`
	CustomFields         *CustomFieldInputModel `json:"customFields"`
	Email                *string                `json:"email"`
	Firstname            *string                `json:"firstname"`
	Lastname             *string                `json:"lastname"`
	LocationID           *string                `json:"locationId"`
	Name                 *string                `json:"name"`
	NotificationType     *string                `json:"notificationType"`
	SendLeadNotification *bool                  `json:"sendLeadNotification"`
	StripeCustomerID     *string                `json:"stripeCustomerId"`
	Type                 *int32                 `json:"type"`
}
