package shared

type CreateCallRequestAnswerURLAnswerMethodEnum string

const (
	CreateCallRequestAnswerURLAnswerMethodEnumPost CreateCallRequestAnswerURLAnswerMethodEnum = "POST"
	CreateCallRequestAnswerURLAnswerMethodEnumGet  CreateCallRequestAnswerURLAnswerMethodEnum = "GET"
)

type CreateCallRequestAnswerURLEventMethodEnum string

const (
	CreateCallRequestAnswerURLEventMethodEnumPost CreateCallRequestAnswerURLEventMethodEnum = "POST"
	CreateCallRequestAnswerURLEventMethodEnumGet  CreateCallRequestAnswerURLEventMethodEnum = "GET"
)

type CreateCallRequestAnswerURLMachineDetectionEnum string

const (
	CreateCallRequestAnswerURLMachineDetectionEnumContinue CreateCallRequestAnswerURLMachineDetectionEnum = "continue"
	CreateCallRequestAnswerURLMachineDetectionEnumHangup   CreateCallRequestAnswerURLMachineDetectionEnum = "hangup"
)

type CreateCallRequestAnswerURL struct {
	AnswerMethod     *CreateCallRequestAnswerURLAnswerMethodEnum     `json:"answer_method"`
	AnswerURL        []string                                        `json:"answer_url"`
	EventMethod      *CreateCallRequestAnswerURLEventMethodEnum      `json:"event_method"`
	EventURL         []string                                        `json:"event_url"`
	From             *EndpointPhoneFrom                              `json:"from"`
	LengthTimer      *int64                                          `json:"length_timer"`
	MachineDetection *CreateCallRequestAnswerURLMachineDetectionEnum `json:"machine_detection"`
	RandomFromNumber *bool                                           `json:"random_from_number"`
	RingingTimer     *int64                                          `json:"ringing_timer"`
	To               []interface{}                                   `json:"to"`
}
