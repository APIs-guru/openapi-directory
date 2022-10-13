package shared

type CompanyUpdateModel struct {
	AddressLine1                    *string `json:"addressLine1"`
	AddressLine2                    *string `json:"addressLine2"`
	BookingWebhookURL               *string `json:"bookingWebhookUrl"`
	City                            *string `json:"city"`
	Country                         *string `json:"country"`
	CustomerWebhookURL              *string `json:"customerWebhookUrl"`
	DisableEmailAndSmsNotifications *bool   `json:"disableEmailAndSmsNotifications"`
	Email                           *string `json:"email"`
	Fax                             *string `json:"fax"`
	Name                            *string `json:"name"`
	NotificationFromEmailAddress    *string `json:"notificationFromEmailAddress"`
	NotificationFromName            *string `json:"notificationFromName"`
	Phone                           *string `json:"phone"`
	PostalCode                      *string `json:"postalCode"`
	RegistrationEmail               *string `json:"registrationEmail"`
	ReminderWebhookURL              *string `json:"reminderWebhookUrl"`
	ResourceWebhookURL              *string `json:"resourceWebhookUrl"`
	State                           *string `json:"state"`
	TimezoneName                    *string `json:"timezoneName"`
	WebhookSignatureHash            *string `json:"webhookSignatureHash"`
	Website                         *string `json:"website"`
}
