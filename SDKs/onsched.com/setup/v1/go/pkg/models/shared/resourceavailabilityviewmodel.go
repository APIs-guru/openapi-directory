package shared

type ResourceAvailabilityViewModel struct {
	BusinessID          *int32  `json:"businessId,omitempty"`
	IgnoreBusinessHours *bool   `json:"ignoreBusinessHours,omitempty"`
	ResourceID          *int32  `json:"resourceId,omitempty"`
	ResourceName        *string `json:"resourceName,omitempty"`
	ResourceTzo         *int32  `json:"resourceTzo,omitempty"`
}
