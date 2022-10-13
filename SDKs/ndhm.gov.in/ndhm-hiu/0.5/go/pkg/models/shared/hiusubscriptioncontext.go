package shared

type HiuSubscriptionContext struct {
	Categories []SubscriptionCategoryEnum  `json:"categories"`
	Hip        *OrganizationRepresentation `json:"hip"`
	Period     SubscriptionPeriod          `json:"period"`
}
