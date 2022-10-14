package operations

type UpdateNetworkSwitchPortSchedulePathParams struct {
	NetworkID      string `pathParam:"style=simple,explode=false,name=networkId"`
	PortScheduleID string `pathParam:"style=simple,explode=false,name=portScheduleId"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

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
