package shared



type CompanyInputModel struct {
    AddressLine1 *string `json:"addressLine1,omitempty"`
    AddressLine2 *string `json:"addressLine2,omitempty"`
    BookingWebhookURL *string `json:"bookingWebhookUrl,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    CustomerWebhookURL *string `json:"customerWebhookUrl,omitempty"`
    DisableEmailAndSmsNotifications *bool `json:"disableEmailAndSmsNotifications,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationFromEmailAddress *string `json:"notificationFromEmailAddress,omitempty"`
    NotificationFromName *string `json:"notificationFromName,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    RegistrationEmail *string `json:"registrationEmail,omitempty"`
    ReminderWebhookURL *string `json:"reminderWebhookUrl,omitempty"`
    ResourceWebhookURL *string `json:"resourceWebhookUrl,omitempty"`
    State *string `json:"state,omitempty"`
    TimezoneName *string `json:"timezoneName,omitempty"`
    WebhookSignatureHash *string `json:"webhookSignatureHash,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

