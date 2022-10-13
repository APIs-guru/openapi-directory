package operations

type UpdateNetworkSwitchPortSchedulePathParams struct {
	NetworkID      string `pathParam:"style=simple,explode=false,name=networkId"`
	PortScheduleID string `pathParam:"style=simple,explode=false,name=portScheduleId"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule struct {
	Friday    *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday    `json:"friday"`
	Monday    *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday    `json:"monday"`
	Saturday  *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday  `json:"saturday"`
	Sunday    *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday    `json:"sunday"`
	Thursday  *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday  `json:"thursday"`
	Tuesday   *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday   `json:"tuesday"`
	Wednesday *UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday `json:"wednesday"`
}

type UpdateNetworkSwitchPortScheduleRequestBody struct {
	Name         *string                                                 `json:"name"`
	PortSchedule *UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule `json:"portSchedule"`
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
