package shared

// GoogleCloudServicebrokerV1beta1ListBrokersResponse
// The response for the `ListBrokers()` method.
type GoogleCloudServicebrokerV1beta1ListBrokersResponse struct {
	Brokers       []GoogleCloudServicebrokerV1beta1Broker
	NextPageToken *string
}
