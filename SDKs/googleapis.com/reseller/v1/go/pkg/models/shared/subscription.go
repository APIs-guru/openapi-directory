package shared



type SubscriptionPlanCommitmentInterval struct {
    EndTime *string `json:"endTime,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    
}

type SubscriptionPlan struct {
    CommitmentInterval *SubscriptionPlanCommitmentInterval `json:"commitmentInterval,omitempty"`
    IsCommitmentPlan *bool `json:"isCommitmentPlan,omitempty"`
    PlanName *string `json:"planName,omitempty"`
    
}

type SubscriptionTransferInfo struct {
    CurrentLegacySkuID *string `json:"currentLegacySkuId,omitempty"`
    MinimumTransferableSeats *int32 `json:"minimumTransferableSeats,omitempty"`
    TransferabilityExpirationTime *string `json:"transferabilityExpirationTime,omitempty"`
    
}

type SubscriptionTrialSettings struct {
    IsInTrial *bool `json:"isInTrial,omitempty"`
    TrialEndTime *string `json:"trialEndTime,omitempty"`
    
}

type Subscription struct {
    BillingMethod *string `json:"billingMethod,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    CustomerDomain *string `json:"customerDomain,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    DealCode *string `json:"dealCode,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Plan *SubscriptionPlan `json:"plan,omitempty"`
    PurchaseOrderID *string `json:"purchaseOrderId,omitempty"`
    RenewalSettings *RenewalSettings `json:"renewalSettings,omitempty"`
    ResourceUIURL *string `json:"resourceUiUrl,omitempty"`
    Seats *Seats `json:"seats,omitempty"`
    SkuID *string `json:"skuId,omitempty"`
    SkuName *string `json:"skuName,omitempty"`
    Status *string `json:"status,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    SuspensionReasons []string `json:"suspensionReasons,omitempty"`
    TransferInfo *SubscriptionTransferInfo `json:"transferInfo,omitempty"`
    TrialSettings *SubscriptionTrialSettings `json:"trialSettings,omitempty"`
    
}

