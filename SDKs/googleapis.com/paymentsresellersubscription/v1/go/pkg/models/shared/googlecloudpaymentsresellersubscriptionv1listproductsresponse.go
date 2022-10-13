package shared

type GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse struct {
	NextPageToken *string                                            `json:"nextPageToken"`
	Products      []GoogleCloudPaymentsResellerSubscriptionV1Product `json:"products"`
}
