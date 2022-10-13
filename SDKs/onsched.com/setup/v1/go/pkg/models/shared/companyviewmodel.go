package shared

type CompanyViewModel struct {
	AddressLine1                    *string `json:"addressLine1"`
	AddressLine2                    *string `json:"addressLine2"`
	BookingWebhookURL               *string `json:"bookingWebhookUrl"`
	City                            *string `json:"city"`
	ClientID                        *string `json:"clientId"`
	ClientSecret                    *string `json:"clientSecret"`
	Country                         *string `json:"country"`
	CustomerWebhookURL              *string `json:"customerWebhookUrl"`
	DeletedStatus                   *bool   `json:"deletedStatus"`
	DeletedTime                     *string `json:"deletedTime"`
	DisableEmailAndSmsNotifications *bool   `json:"disableEmailAndSmsNotifications"`
	Email                           *string `json:"email"`
	Fax                             *string `json:"fax"`
	ID                              *string `json:"id"`
	Name                            *string `json:"name"`
	NotificationFromEmailAddress    *string `json:"notificationFromEmailAddress"`
	NotificationFromName            *string `json:"notificationFromName"`
	ObjectName                      *string `json:"objectName"`
	Phone                           *string `json:"phone"`
	PostalCode                      *string `json:"postalCode"`
	RegistrationDate                *string `json:"registrationDate"`
	RegistrationEmail               *string `json:"registrationEmail"`
	ReminderWebhookURL              *string `json:"reminderWebhookUrl"`
	ResourceWebhookURL              *string `json:"resourceWebhookUrl"`
	State                           *string `json:"state"`
	TimezoneID                      *string `json:"timezoneId"`
	Website                         *string `json:"website"`
}
