package shared

type OnlineSettingsViewModel struct {
	AvailabilityForm           *int32  `json:"availabilityForm"`
	BookAheadUnit              *int32  `json:"bookAheadUnit"`
	BookAheadValue             *int32  `json:"bookAheadValue"`
	BookInAdvance              *int32  `json:"bookInAdvance"`
	BookWithAccount            *bool   `json:"bookWithAccount"`
	BookingConfirmationMessage *string `json:"bookingConfirmationMessage"`
	BookingMessage             *string `json:"bookingMessage"`
	BookingPolicy              *string `json:"bookingPolicy"`
	BookingTimerMins           *int32  `json:"bookingTimerMins"`
	BusinessID                 *string `json:"businessId"`
	CompanyID                  *string `json:"companyId"`
	CustomerBookingsPerDay     *int32  `json:"customerBookingsPerDay"`
	CustomerVerification       *bool   `json:"customerVerification"`
	DefaultService             *bool   `json:"defaultService"`
	DefaultToCustomerTimezone  *bool   `json:"defaultToCustomerTimezone"`
	DisableAuthorization       *bool   `json:"disableAuthorization"`
	EnableWorldTimezones       *bool   `json:"enableWorldTimezones"`
	Enabled                    *bool   `json:"enabled"`
	FamilyMembersEnabled       *bool   `json:"familyMembersEnabled"`
	FirstAvailable             *bool   `json:"firstAvailable"`
	FormFlow                   *int32  `json:"formFlow"`
	HideBreadCrumbNav          *bool   `json:"hideBreadCrumbNav"`
	HideContinueBooking        *bool   `json:"hideContinueBooking"`
	HideLocationNav            *bool   `json:"hideLocationNav"`
	HideNavBar                 *bool   `json:"hideNavBar"`
	HideServiceGroupsNav       *bool   `json:"hideServiceGroupsNav"`
	HideServicesNav            *bool   `json:"hideServicesNav"`
	ID                         *int32  `json:"id"`
	LateCancelAction           *int32  `json:"lateCancelAction"`
	LateCancelHours            *int32  `json:"lateCancelHours"`
	LateRescheduleAction       *int32  `json:"lateRescheduleAction"`
	LateRescheduleHours        *int32  `json:"lateRescheduleHours"`
	LiveMode                   *bool   `json:"liveMode"`
	ObjectName                 *string `json:"objectName"`
	ResourceAnyLabel           *string `json:"resourceAnyLabel"`
	ResourceLabel              *string `json:"resourceLabel"`
	ResourceSelection          *bool   `json:"resourceSelection"`
	ReturnToAvailability       *bool   `json:"returnToAvailability"`
	ReturnToService            *bool   `json:"returnToService"`
	ServiceLabel               *string `json:"serviceLabel"`
	ShowBusinessLogo           *bool   `json:"showBusinessLogo"`
	ShowOnSchedLogo            *bool   `json:"showOnSchedLogo"`
	ShowServiceGroups          *bool   `json:"showServiceGroups"`
}
