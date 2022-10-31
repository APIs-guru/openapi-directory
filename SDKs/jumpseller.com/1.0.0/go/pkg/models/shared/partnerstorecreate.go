package shared




type PartnerStoreCreatePlanNameEnum string

const (
    PartnerStoreCreatePlanNameEnumPro PartnerStoreCreatePlanNameEnum = "pro"
PartnerStoreCreatePlanNameEnumPlus PartnerStoreCreatePlanNameEnum = "plus"
PartnerStoreCreatePlanNameEnumPremium PartnerStoreCreatePlanNameEnum = "premium"
)


type PartnerStoreCreate struct {
    Aff *string `json:"aff,omitempty"`
    Email *string `json:"email,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Password *string `json:"password,omitempty"`
    PlanName *PartnerStoreCreatePlanNameEnum `json:"plan_name,omitempty"`
    RejectDuplicates *bool `json:"reject_duplicates,omitempty"`
    StoreName *string `json:"store_name,omitempty"`
    
}

