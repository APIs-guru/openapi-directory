package operations

type SubscriptionsAPISaveRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type SubscriptionsAPISaveResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	SubscriptionsAPISave201ApplicationJSONOneOf *interface{}
}
