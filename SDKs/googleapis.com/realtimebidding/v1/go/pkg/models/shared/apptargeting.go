package shared

// AppTargeting
// A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
type AppTargeting struct {
	MobileAppCategoryTargeting *NumericTargetingDimension `json:"mobileAppCategoryTargeting,omitempty"`
	MobileAppTargeting         *StringTargetingDimension  `json:"mobileAppTargeting,omitempty"`
}
