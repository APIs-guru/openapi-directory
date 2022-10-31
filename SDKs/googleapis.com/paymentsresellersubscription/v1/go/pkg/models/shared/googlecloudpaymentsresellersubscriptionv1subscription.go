package shared




type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum string

const (
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnumProcessingStateUnspecified GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = "PROCESSING_STATE_UNSPECIFIED"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnumProcessingStateCancelling GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = "PROCESSING_STATE_CANCELLING"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnumProcessingStateRecurring GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = "PROCESSING_STATE_RECURRING"
)



type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum string

const (
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateUnspecified GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_UNSPECIFIED"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateCreated GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_CREATED"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateActive GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_ACTIVE"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateCancelled GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_CANCELLED"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateInGracePeriod GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_IN_GRACE_PERIOD"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateCancelAtEndOfCycle GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_CANCEL_AT_END_OF_CYCLE"
GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnumStateSuspended GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = "STATE_SUSPENDED"
)


type GoogleCloudPaymentsResellerSubscriptionV1Subscription struct {
    CancellationDetails *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails `json:"cancellationDetails,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    CycleEndTime *string `json:"cycleEndTime,omitempty"`
    EndUserEntitled *bool `json:"endUserEntitled,omitempty"`
    FreeTrialEndTime *string `json:"freeTrialEndTime,omitempty"`
    LineItems []GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem `json:"lineItems,omitempty"`
    Name *string `json:"name,omitempty"`
    PartnerUserToken *string `json:"partnerUserToken,omitempty"`
    ProcessingState *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum `json:"processingState,omitempty"`
    Products []string `json:"products,omitempty"`
    PromotionSpecs []GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec `json:"promotionSpecs,omitempty"`
    Promotions []string `json:"promotions,omitempty"`
    RedirectURI *string `json:"redirectUri,omitempty"`
    RenewalTime *string `json:"renewalTime,omitempty"`
    ServiceLocation *GoogleCloudPaymentsResellerSubscriptionV1Location `json:"serviceLocation,omitempty"`
    State *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    UpgradeDowngradeDetails *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails `json:"upgradeDowngradeDetails,omitempty"`
    
}

