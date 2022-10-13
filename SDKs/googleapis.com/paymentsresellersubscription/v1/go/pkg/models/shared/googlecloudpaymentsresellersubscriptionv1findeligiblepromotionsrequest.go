package shared

type GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest struct {
	Filter    *string `json:"filter"`
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
}
