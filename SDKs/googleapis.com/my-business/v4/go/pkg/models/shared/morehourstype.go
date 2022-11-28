package shared

// MoreHoursType
// More hours types that a business can offers, in addition to its regular hours.
type MoreHoursType struct {
	DisplayName          *string `json:"displayName,omitempty"`
	HoursTypeID          *string `json:"hoursTypeId,omitempty"`
	LocalizedDisplayName *string `json:"localizedDisplayName,omitempty"`
}
