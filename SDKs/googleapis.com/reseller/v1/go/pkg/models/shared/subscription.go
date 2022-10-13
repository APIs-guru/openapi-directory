package shared

type SubscriptionPlanCommitmentInterval struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type SubscriptionPlan struct {
	CommitmentInterval *SubscriptionPlanCommitmentInterval `json:"commitmentInterval"`
	IsCommitmentPlan   *bool                               `json:"isCommitmentPlan"`
	PlanName           *string                             `json:"planName"`
}

type SubscriptionTransferInfo struct {
	CurrentLegacySkuID            *string `json:"currentLegacySkuId"`
	MinimumTransferableSeats      *int32  `json:"minimumTransferableSeats"`
	TransferabilityExpirationTime *string `json:"transferabilityExpirationTime"`
}

type SubscriptionTrialSettings struct {
	IsInTrial    *bool   `json:"isInTrial"`
	TrialEndTime *string `json:"trialEndTime"`
}

type Subscription struct {
	BillingMethod     *string                    `json:"billingMethod"`
	CreationTime      *string                    `json:"creationTime"`
	CustomerDomain    *string                    `json:"customerDomain"`
	CustomerID        *string                    `json:"customerId"`
	DealCode          *string                    `json:"dealCode"`
	Kind              *string                    `json:"kind"`
	Plan              *SubscriptionPlan          `json:"plan"`
	PurchaseOrderID   *string                    `json:"purchaseOrderId"`
	RenewalSettings   *RenewalSettings           `json:"renewalSettings"`
	ResourceUIURL     *string                    `json:"resourceUiUrl"`
	Seats             *Seats                     `json:"seats"`
	SkuID             *string                    `json:"skuId"`
	SkuName           *string                    `json:"skuName"`
	Status            *string                    `json:"status"`
	SubscriptionID    *string                    `json:"subscriptionId"`
	SuspensionReasons []string                   `json:"suspensionReasons"`
	TransferInfo      *SubscriptionTransferInfo  `json:"transferInfo"`
	TrialSettings     *SubscriptionTrialSettings `json:"trialSettings"`
}
