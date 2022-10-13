package operations

type SubscriptionsAPIDisableRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type SubscriptionsAPIDisableResponse struct {
	ContentType string
	StatusCode  int64
}
