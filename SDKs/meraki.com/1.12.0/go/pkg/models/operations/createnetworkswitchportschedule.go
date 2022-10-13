package operations

type CreateNetworkSwitchPortSchedulePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkSwitchPortScheduleRequestBodyPortSchedule struct {
	Friday    *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday    `json:"friday"`
	Monday    *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday    `json:"monday"`
	Saturday  *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday  `json:"saturday"`
	Sunday    *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday    `json:"sunday"`
	Thursday  *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday  `json:"thursday"`
	Tuesday   *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday   `json:"tuesday"`
	Wednesday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday `json:"wednesday"`
}

type CreateNetworkSwitchPortScheduleRequestBody struct {
	Name         string                                                  `json:"name"`
	PortSchedule *CreateNetworkSwitchPortScheduleRequestBodyPortSchedule `json:"portSchedule"`
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
