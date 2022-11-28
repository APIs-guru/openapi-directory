package operations

type UpdateNetworkSwitchPortSchedulePathParams struct {
	NetworkID      string `pathParam:"style=simple,explode=false,name=networkId"`
	PortScheduleID string `pathParam:"style=simple,explode=false,name=portScheduleId"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
// The schedule object for Friday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
// The schedule object for Monday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
// The schedule object for Saturday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
// The schedule object for Sunday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
// The schedule object for Thursday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
// The schedule object for Tuesday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
// The schedule object for Wednesday.
type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule
//
//	The schedule for switch port scheduling. Schedules are applied to days of the week.
//	When it's empty, default schedule with all days of a week are configured.
//	Any unspecified day in the schedule is added as a default schedule configuration of the day.
type UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule struct {
	Friday    *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday    `json:"friday,omitempty"`
	Monday    *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday    `json:"monday,omitempty"`
	Saturday  *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday  `json:"saturday,omitempty"`
	Sunday    *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday    `json:"sunday,omitempty"`
	Thursday  *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday  `json:"thursday,omitempty"`
	Tuesday   *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday   `json:"tuesday,omitempty"`
	Wednesday *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday `json:"wednesday,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBody struct {
	Name         *string                                                 `json:"name,omitempty"`
	PortSchedule *UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule `json:"portSchedule,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequest struct {
	PathParams UpdateNetworkSwitchPortSchedulePathParams
	Request    *UpdateNetworkSwitchPortScheduleRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchPortScheduleResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateNetworkSwitchPortSchedule200ApplicationJSONObject map[string]interface{}
}
