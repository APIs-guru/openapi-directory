package shared

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnumProcessingStateUnspecified GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = "PROCESSING_STATE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnumProcessingStateCancelling  GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = "PROCESSING_STATE_CANCELLING"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnumProcessingStateRecurring   GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = "PROCESSING_STATE_RECURRING"
)

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateUnspecified        GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateCreated            GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_CREATED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateActive             GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_ACTIVE"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateCancelled          GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_CANCELLED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateInGracePeriod      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_IN_GRACE_PERIOD"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateCancelAtEndOfCycle GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_CANCEL_AT_END_OF_CYCLE"
)

type GoogleCloudPaymentsResellerSubscriptionV1Subscription struct {
	CancellationDetails     *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails     `json:"cancellationDetails"`
	CreateTime              *string                                                                       `json:"createTime"`
	CycleEndTime            *string                                                                       `json:"cycleEndTime"`
	EndUserEntitled         *bool                                                                         `json:"endUserEntitled"`
	FreeTrialEndTime        *string                                                                       `json:"freeTrialEndTime"`
	LineItems               []GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem               `json:"lineItems"`
	Name                    *string                                                                       `json:"name"`
	PartnerUserToken        *string                                                                       `json:"partnerUserToken"`
	ProcessingState         *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum     `json:"processingState"`
	Products                []string                                                                      `json:"products"`
	PromotionSpecs          []GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec          `json:"promotionSpecs"`
	Promotions              []string                                                                      `json:"promotions"`
	RedirectURI             *string                                                                       `json:"redirectUri"`
	RenewalTime             *string                                                                       `json:"renewalTime"`
	ServiceLocation         *GoogleCloudPaymentsResellerSubscriptionV1Location                            `json:"serviceLocation"`
	State                   *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum               `json:"state"`
	UpdateTime              *string                                                                       `json:"updateTime"`
	UpgradeDowngradeDetails *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails `json:"upgradeDowngradeDetails"`
}
