package shared



type HiuSubscriptionContext struct {
    Categories []SubscriptionCategoryEnum `json:"categories"`
    Hip *OrganizationRepresentation `json:"hip,omitempty"`
    Period SubscriptionPeriod `json:"period"`
    
}

