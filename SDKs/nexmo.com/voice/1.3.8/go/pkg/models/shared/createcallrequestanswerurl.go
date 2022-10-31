package shared




type CreateCallRequestAnswerURLAnswerMethodEnum string

const (
    CreateCallRequestAnswerURLAnswerMethodEnumPost CreateCallRequestAnswerURLAnswerMethodEnum = "POST"
CreateCallRequestAnswerURLAnswerMethodEnumGet CreateCallRequestAnswerURLAnswerMethodEnum = "GET"
)



type CreateCallRequestAnswerURLEventMethodEnum string

const (
    CreateCallRequestAnswerURLEventMethodEnumPost CreateCallRequestAnswerURLEventMethodEnum = "POST"
CreateCallRequestAnswerURLEventMethodEnumGet CreateCallRequestAnswerURLEventMethodEnum = "GET"
)



type CreateCallRequestAnswerURLMachineDetectionEnum string

const (
    CreateCallRequestAnswerURLMachineDetectionEnumContinue CreateCallRequestAnswerURLMachineDetectionEnum = "continue"
CreateCallRequestAnswerURLMachineDetectionEnumHangup CreateCallRequestAnswerURLMachineDetectionEnum = "hangup"
)


type CreateCallRequestAnswerURL struct {
    AnswerMethod *CreateCallRequestAnswerURLAnswerMethodEnum `json:"answer_method,omitempty"`
    AnswerURL []string `json:"answer_url"`
    EventMethod *CreateCallRequestAnswerURLEventMethodEnum `json:"event_method,omitempty"`
    EventURL []string `json:"event_url,omitempty"`
    From *EndpointPhoneFrom `json:"from,omitempty"`
    LengthTimer *int64 `json:"length_timer,omitempty"`
    MachineDetection *CreateCallRequestAnswerURLMachineDetectionEnum `json:"machine_detection,omitempty"`
    RandomFromNumber *bool `json:"random_from_number,omitempty"`
    RingingTimer *int64 `json:"ringing_timer,omitempty"`
    To []interface{} `json:"to"`
    
}

