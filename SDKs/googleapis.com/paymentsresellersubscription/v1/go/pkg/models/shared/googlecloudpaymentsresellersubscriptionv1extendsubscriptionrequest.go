package shared

// GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest
// Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
type GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest struct {
	Extension *GoogleCloudPaymentsResellerSubscriptionV1Extension `json:"extension,omitempty"`
	RequestID *string                                             `json:"requestId,omitempty"`
}
