package shared

type CustomerUpdateModel struct {
	Address          *AddressUpdateModel     `json:"address"`
	Contact          *ContactUpdateModel     `json:"contact"`
	CustomFields     *CustomFieldUpdateModel `json:"customFields"`
	Email            *string                 `json:"email"`
	Firstname        *string                 `json:"firstname"`
	Lastname         *string                 `json:"lastname"`
	LocationID       *string                 `json:"locationId"`
	Name             *string                 `json:"name"`
	NotificationType *string                 `json:"notificationType"`
	StripeCustomerID *string                 `json:"stripeCustomerId"`
	Type             *int32                  `json:"type"`
}
