package shared

type Message struct {
	CreateTime      *string           `json:"createTime"`
	Data            *string           `json:"data"`
	Labels          map[string]string `json:"labels"`
	MessageType     *string           `json:"messageType"`
	Name            *string           `json:"name"`
	ParsedData      *ParsedData       `json:"parsedData"`
	PatientIds      []PatientID       `json:"patientIds"`
	SchematizedData *SchematizedData  `json:"schematizedData"`
	SendFacility    *string           `json:"sendFacility"`
	SendTime        *string           `json:"sendTime"`
}
