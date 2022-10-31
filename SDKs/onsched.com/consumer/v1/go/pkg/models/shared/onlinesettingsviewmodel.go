package shared

type OnlineSettingsViewModel struct {
	AvailabilityForm           *int32  `json:"availabilityForm,omitempty"`
	BookAheadUnit              *int32  `json:"bookAheadUnit,omitempty"`
	BookAheadValue             *int32  `json:"bookAheadValue,omitempty"`
	BookInAdvance              *int32  `json:"bookInAdvance,omitempty"`
	BookWithAccount            *bool   `json:"bookWithAccount,omitempty"`
	BookingConfirmationMessage *string `json:"bookingConfirmationMessage,omitempty"`
	BookingMessage             *string `json:"bookingMessage,omitempty"`
	BookingPolicy              *string `json:"bookingPolicy,omitempty"`
	BookingTimerMins           *int32  `json:"bookingTimerMins,omitempty"`
	BusinessID                 *string `json:"businessId,omitempty"`
	CompanyID                  *string `json:"companyId,omitempty"`
	CustomerBookingsPerDay     *int32  `json:"customerBookingsPerDay,omitempty"`
	CustomerVerification       *bool   `json:"customerVerification,omitempty"`
	DefaultService             *bool   `json:"defaultService,omitempty"`
	DefaultToCustomerTimezone  *bool   `json:"defaultToCustomerTimezone,omitempty"`
	DisableAuthorization       *bool   `json:"disableAuthorization,omitempty"`
	EnableWorldTimezones       *bool   `json:"enableWorldTimezones,omitempty"`
	Enabled                    *bool   `json:"enabled,omitempty"`
	FamilyMembersEnabled       *bool   `json:"familyMembersEnabled,omitempty"`
	FirstAvailable             *bool   `json:"firstAvailable,omitempty"`
	FormFlow                   *int32  `json:"formFlow,omitempty"`
	HideBreadCrumbNav          *bool   `json:"hideBreadCrumbNav,omitempty"`
	HideContinueBooking        *bool   `json:"hideContinueBooking,omitempty"`
	HideLocationNav            *bool   `json:"hideLocationNav,omitempty"`
	HideNavBar                 *bool   `json:"hideNavBar,omitempty"`
	HideServiceGroupsNav       *bool   `json:"hideServiceGroupsNav,omitempty"`
	HideServicesNav            *bool   `json:"hideServicesNav,omitempty"`
	ID                         *int32  `json:"id,omitempty"`
	LateCancelAction           *int32  `json:"lateCancelAction,omitempty"`
	LateCancelHours            *int32  `json:"lateCancelHours,omitempty"`
	LateRescheduleAction       *int32  `json:"lateRescheduleAction,omitempty"`
	LateRescheduleHours        *int32  `json:"lateRescheduleHours,omitempty"`
	LiveMode                   *bool   `json:"liveMode,omitempty"`
	ObjectName                 *string `json:"objectName,omitempty"`
	ResourceAnyLabel           *string `json:"resourceAnyLabel,omitempty"`
	ResourceLabel              *string `json:"resourceLabel,omitempty"`
	ResourceSelection          *bool   `json:"resourceSelection,omitempty"`
	ReturnToAvailability       *bool   `json:"returnToAvailability,omitempty"`
	ReturnToService            *bool   `json:"returnToService,omitempty"`
	ServiceLabel               *string `json:"serviceLabel,omitempty"`
	ShowBusinessLogo           *bool   `json:"showBusinessLogo,omitempty"`
	ShowOnSchedLogo            *bool   `json:"showOnSchedLogo,omitempty"`
	ShowServiceGroups          *bool   `json:"showServiceGroups,omitempty"`
}
