package shared

type CustomerUpdateModel struct {
	Address          *AddressUpdateModel     `json:"address,omitempty"`
	Contact          *ContactUpdateModel     `json:"contact,omitempty"`
	CustomFields     *CustomFieldUpdateModel `json:"customFields,omitempty"`
	Email            *string                 `json:"email,omitempty"`
	Firstname        *string                 `json:"firstname,omitempty"`
	Lastname         *string                 `json:"lastname,omitempty"`
	LocationID       *string                 `json:"locationId,omitempty"`
	Name             *string                 `json:"name,omitempty"`
	NotificationType *string                 `json:"notificationType,omitempty"`
	StripeCustomerID *string                 `json:"stripeCustomerId,omitempty"`
	Type             *int32                  `json:"type,omitempty"`
}
