package operations

type CreateEventNotificationHeaders struct {
	XFapiFinancialID   string  `header:"name=x-fapi-financial-id"`
	XFapiInteractionID *string `header:"name=x-fapi-interaction-id"`
}

type CreateEventNotificationRequest struct {
	Headers CreateEventNotificationHeaders
	Request string `request:"mediaType=application/jwt"`
}

type CreateEventNotificationResponse struct {
	ContentType string
	StatusCode  int64
}
