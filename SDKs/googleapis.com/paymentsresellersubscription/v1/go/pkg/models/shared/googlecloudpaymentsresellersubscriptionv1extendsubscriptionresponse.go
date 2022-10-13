package shared

type GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse struct {
	CycleEndTime     *string `json:"cycleEndTime"`
	FreeTrialEndTime *string `json:"freeTrialEndTime"`
	RenewalTime      *string `json:"renewalTime"`
}
