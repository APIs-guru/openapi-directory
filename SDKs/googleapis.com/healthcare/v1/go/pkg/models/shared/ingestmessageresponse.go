package shared

type IngestMessageResponse struct {
	Hl7Ack  *string  `json:"hl7Ack"`
	Message *Message `json:"message"`
}
