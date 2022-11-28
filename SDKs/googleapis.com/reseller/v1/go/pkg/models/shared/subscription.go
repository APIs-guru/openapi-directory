package shared

// SubscriptionPlanCommitmentInterval
// In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses.
type SubscriptionPlanCommitmentInterval struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

// SubscriptionPlan
// The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
type SubscriptionPlan struct {
	CommitmentInterval *SubscriptionPlanCommitmentInterval `json:"commitmentInterval,omitempty"`
	IsCommitmentPlan   *bool                               `json:"isCommitmentPlan,omitempty"`
	PlanName           *string                             `json:"planName,omitempty"`
}

// SubscriptionTransferInfo
// Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
type SubscriptionTransferInfo struct {
	CurrentLegacySkuID            *string `json:"currentLegacySkuId,omitempty"`
	MinimumTransferableSeats      *int32  `json:"minimumTransferableSeats,omitempty"`
	TransferabilityExpirationTime *string `json:"transferabilityExpirationTime,omitempty"`
}

// SubscriptionTrialSettings
// The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
type SubscriptionTrialSettings struct {
	IsInTrial    *bool   `json:"isInTrial,omitempty"`
	TrialEndTime *string `json:"trialEndTime,omitempty"`
}

// Subscription
// JSON template for a subscription.
type Subscription struct {
	BillingMethod     *string                    `json:"billingMethod,omitempty"`
	CreationTime      *string                    `json:"creationTime,omitempty"`
	CustomerDomain    *string                    `json:"customerDomain,omitempty"`
	CustomerID        *string                    `json:"customerId,omitempty"`
	DealCode          *string                    `json:"dealCode,omitempty"`
	Kind              *string                    `json:"kind,omitempty"`
	Plan              *SubscriptionPlan          `json:"plan,omitempty"`
	PurchaseOrderID   *string                    `json:"purchaseOrderId,omitempty"`
	RenewalSettings   *RenewalSettings           `json:"renewalSettings,omitempty"`
	ResourceUIURL     *string                    `json:"resourceUiUrl,omitempty"`
	Seats             *Seats                     `json:"seats,omitempty"`
	SkuID             *string                    `json:"skuId,omitempty"`
	SkuName           *string                    `json:"skuName,omitempty"`
	Status            *string                    `json:"status,omitempty"`
	SubscriptionID    *string                    `json:"subscriptionId,omitempty"`
	SuspensionReasons []string                   `json:"suspensionReasons,omitempty"`
	TransferInfo      *SubscriptionTransferInfo  `json:"transferInfo,omitempty"`
	TrialSettings     *SubscriptionTrialSettings `json:"trialSettings,omitempty"`
}
