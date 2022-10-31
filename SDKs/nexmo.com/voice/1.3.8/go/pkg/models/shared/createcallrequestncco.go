package shared




type CreateCallRequestNccoEventMethodEnum string

const (
    CreateCallRequestNccoEventMethodEnumPost CreateCallRequestNccoEventMethodEnum = "POST"
CreateCallRequestNccoEventMethodEnumGet CreateCallRequestNccoEventMethodEnum = "GET"
)



type CreateCallRequestNccoMachineDetectionEnum string

const (
    CreateCallRequestNccoMachineDetectionEnumContinue CreateCallRequestNccoMachineDetectionEnum = "continue"
CreateCallRequestNccoMachineDetectionEnumHangup CreateCallRequestNccoMachineDetectionEnum = "hangup"
)


type CreateCallRequestNcco struct {
    EventMethod *CreateCallRequestNccoEventMethodEnum `json:"event_method,omitempty"`
    EventURL []string `json:"event_url,omitempty"`
    From *EndpointPhoneFrom `json:"from,omitempty"`
    LengthTimer *int64 `json:"length_timer,omitempty"`
    MachineDetection *CreateCallRequestNccoMachineDetectionEnum `json:"machine_detection,omitempty"`
    Ncco []map[string]interface{} `json:"ncco"`
    RandomFromNumber *bool `json:"random_from_number,omitempty"`
    RingingTimer *int64 `json:"ringing_timer,omitempty"`
    To []interface{} `json:"to"`
    
}

