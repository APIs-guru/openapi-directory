package shared

type AppTargeting struct {
	MobileAppCategoryTargeting *NumericTargetingDimension `json:"mobileAppCategoryTargeting"`
	MobileAppTargeting         *StringTargetingDimension  `json:"mobileAppTargeting"`
}
