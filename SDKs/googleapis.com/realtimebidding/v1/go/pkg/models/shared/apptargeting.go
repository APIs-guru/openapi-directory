package shared



type AppTargeting struct {
    MobileAppCategoryTargeting *NumericTargetingDimension `json:"mobileAppCategoryTargeting,omitempty"`
    MobileAppTargeting *StringTargetingDimension `json:"mobileAppTargeting,omitempty"`
    
}

