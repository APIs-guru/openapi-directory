package shared

type CreateCallRequestNccoEventMethodEnum string

const (
	CreateCallRequestNccoEventMethodEnumPost CreateCallRequestNccoEventMethodEnum = "POST"
	CreateCallRequestNccoEventMethodEnumGet  CreateCallRequestNccoEventMethodEnum = "GET"
)

type CreateCallRequestNccoMachineDetectionEnum string

const (
	CreateCallRequestNccoMachineDetectionEnumContinue CreateCallRequestNccoMachineDetectionEnum = "continue"
	CreateCallRequestNccoMachineDetectionEnumHangup   CreateCallRequestNccoMachineDetectionEnum = "hangup"
)

type CreateCallRequestNcco struct {
	EventMethod      *CreateCallRequestNccoEventMethodEnum      `json:"event_method"`
	EventURL         []string                                   `json:"event_url"`
	From             *EndpointPhoneFrom                         `json:"from"`
	LengthTimer      *int64                                     `json:"length_timer"`
	MachineDetection *CreateCallRequestNccoMachineDetectionEnum `json:"machine_detection"`
	Ncco             []map[string]interface{}                   `json:"ncco"`
	RandomFromNumber *bool                                      `json:"random_from_number"`
	RingingTimer     *int64                                     `json:"ringing_timer"`
	To               []interface{}                              `json:"to"`
}
