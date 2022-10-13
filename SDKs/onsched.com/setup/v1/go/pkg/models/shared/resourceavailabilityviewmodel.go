package shared

type ResourceAvailabilityViewModel struct {
	BusinessID          *int32  `json:"businessId"`
	IgnoreBusinessHours *bool   `json:"ignoreBusinessHours"`
	ResourceID          *int32  `json:"resourceId"`
	ResourceName        *string `json:"resourceName"`
	ResourceTzo         *int32  `json:"resourceTzo"`
}
