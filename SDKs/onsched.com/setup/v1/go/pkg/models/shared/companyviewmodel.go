package shared

type CompanyViewModel struct {
	AddressLine1                    *string `json:"addressLine1,omitempty"`
	AddressLine2                    *string `json:"addressLine2,omitempty"`
	BookingWebhookURL               *string `json:"bookingWebhookUrl,omitempty"`
	City                            *string `json:"city,omitempty"`
	ClientID                        *string `json:"clientId,omitempty"`
	ClientSecret                    *string `json:"clientSecret,omitempty"`
	Country                         *string `json:"country,omitempty"`
	CustomerWebhookURL              *string `json:"customerWebhookUrl,omitempty"`
	DeletedStatus                   *bool   `json:"deletedStatus,omitempty"`
	DeletedTime                     *string `json:"deletedTime,omitempty"`
	DisableEmailAndSmsNotifications *bool   `json:"disableEmailAndSmsNotifications,omitempty"`
	Email                           *string `json:"email,omitempty"`
	Fax                             *string `json:"fax,omitempty"`
	ID                              *string `json:"id,omitempty"`
	Name                            *string `json:"name,omitempty"`
	NotificationFromEmailAddress    *string `json:"notificationFromEmailAddress,omitempty"`
	NotificationFromName            *string `json:"notificationFromName,omitempty"`
	ObjectName                      *string `json:"objectName,omitempty"`
	Phone                           *string `json:"phone,omitempty"`
	PostalCode                      *string `json:"postalCode,omitempty"`
	RegistrationDate                *string `json:"registrationDate,omitempty"`
	RegistrationEmail               *string `json:"registrationEmail,omitempty"`
	ReminderWebhookURL              *string `json:"reminderWebhookUrl,omitempty"`
	ResourceWebhookURL              *string `json:"resourceWebhookUrl,omitempty"`
	State                           *string `json:"state,omitempty"`
	TimezoneID                      *string `json:"timezoneId,omitempty"`
	Website                         *string `json:"website,omitempty"`
}
