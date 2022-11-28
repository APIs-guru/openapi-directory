package operations

type CreateNetworkSwitchPortSchedulePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
// The schedule object for Friday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
// The schedule object for Monday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
// The schedule object for Saturday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
// The schedule object for Sunday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
// The schedule object for Thursday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
// The schedule object for Tuesday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
// The schedule object for Wednesday.
type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkSwitchPortScheduleRequestBodyPortSchedule
//
//	The schedule for switch port scheduling. Schedules are applied to days of the week.
//	When it's empty, default schedule with all days of a week are configured.
//	Any unspecified day in the schedule is added as a default schedule configuration of the day.
type CreateNetworkSwitchPortScheduleRequestBodyPortSchedule struct {
	Friday    *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday    `json:"friday,omitempty"`
	Monday    *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday    `json:"monday,omitempty"`
	Saturday  *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday  `json:"saturday,omitempty"`
	Sunday    *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday    `json:"sunday,omitempty"`
	Thursday  *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday  `json:"thursday,omitempty"`
	Tuesday   *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday   `json:"tuesday,omitempty"`
	Wednesday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday `json:"wednesday,omitempty"`
}

type CreateNetworkSwitchPortScheduleRequestBody struct {
	Name         string                                                  `json:"name"`
	PortSchedule *CreateNetworkSwitchPortScheduleRequestBodyPortSchedule `json:"portSchedule,omitempty"`
}

type CreateNetworkSwitchPortScheduleRequest struct {
	PathParams CreateNetworkSwitchPortSchedulePathParams
	Request    CreateNetworkSwitchPortScheduleRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSwitchPortScheduleResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	CreateNetworkSwitchPortSchedule201ApplicationJSONObject map[string]interface{}
}
