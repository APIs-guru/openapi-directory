package shared

type Message struct {
	CreateTime      *string           `json:"createTime,omitempty"`
	Data            *string           `json:"data,omitempty"`
	Labels          map[string]string `json:"labels,omitempty"`
	MessageType     *string           `json:"messageType,omitempty"`
	Name            *string           `json:"name,omitempty"`
	ParsedData      *ParsedData       `json:"parsedData,omitempty"`
	PatientIds      []PatientID       `json:"patientIds,omitempty"`
	SchematizedData *SchematizedData  `json:"schematizedData,omitempty"`
	SendFacility    *string           `json:"sendFacility,omitempty"`
	SendTime        *string           `json:"sendTime,omitempty"`
}
