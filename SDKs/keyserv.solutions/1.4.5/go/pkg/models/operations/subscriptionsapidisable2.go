package operations

type SubscriptionsAPIDisable2Request struct {
	Request interface{} `request:"mediaType=application/json"`
}

type SubscriptionsAPIDisable2Response struct {
	ContentType string
	StatusCode  int64
}
