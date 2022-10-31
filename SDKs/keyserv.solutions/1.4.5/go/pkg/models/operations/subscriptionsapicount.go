package operations

type SubscriptionsAPICountRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type SubscriptionsAPICountResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	SubscriptionsAPICount200ApplicationJSONOneOf *interface{}
}
