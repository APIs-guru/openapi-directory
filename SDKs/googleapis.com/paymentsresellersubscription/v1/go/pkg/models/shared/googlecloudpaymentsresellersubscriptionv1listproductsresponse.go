package shared

type GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse struct {
	NextPageToken *string                                            `json:"nextPageToken,omitempty"`
	Products      []GoogleCloudPaymentsResellerSubscriptionV1Product `json:"products,omitempty"`
}
