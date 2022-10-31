package operations



type CreateNetworkSwitchPortSchedulePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBodyPortSchedule struct {
    Friday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday `json:"friday,omitempty"`
    Monday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday `json:"monday,omitempty"`
    Saturday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday `json:"saturday,omitempty"`
    Sunday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday `json:"sunday,omitempty"`
    Thursday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday `json:"thursday,omitempty"`
    Tuesday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday `json:"tuesday,omitempty"`
    Wednesday *CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday `json:"wednesday,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequestBody struct {
    Name string `json:"name"`
    PortSchedule *CreateNetworkSwitchPortScheduleRequestBodyPortSchedule `json:"portSchedule,omitempty"`
    
}

type CreateNetworkSwitchPortScheduleRequest struct {
    PathParams CreateNetworkSwitchPortSchedulePathParams 
    Request CreateNetworkSwitchPortScheduleRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkSwitchPortScheduleResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkSwitchPortSchedule201ApplicationJSONObject map[string]interface{} 
    
}

