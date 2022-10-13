package shared

type PartnerStoreCreatePlanNameEnum string

const (
	PartnerStoreCreatePlanNameEnumPro     PartnerStoreCreatePlanNameEnum = "pro"
	PartnerStoreCreatePlanNameEnumPlus    PartnerStoreCreatePlanNameEnum = "plus"
	PartnerStoreCreatePlanNameEnumPremium PartnerStoreCreatePlanNameEnum = "premium"
)

type PartnerStoreCreate struct {
	Aff              *string                         `json:"aff"`
	Email            *string                         `json:"email"`
	Locale           *string                         `json:"locale"`
	Password         *string                         `json:"password"`
	PlanName         *PartnerStoreCreatePlanNameEnum `json:"plan_name"`
	RejectDuplicates *bool                           `json:"reject_duplicates"`
	StoreName        *string                         `json:"store_name"`
}
