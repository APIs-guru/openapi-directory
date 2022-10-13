package operations

type SubscriptionsAPIEnableRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type SubscriptionsAPIEnableResponse struct {
	ContentType string
	StatusCode  int64
}
