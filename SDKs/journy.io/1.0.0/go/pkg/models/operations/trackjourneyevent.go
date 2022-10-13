package operations

type TrackJourneyEventRequestBodyIdentificationAccount struct {
	AccountID *string `json:"accountId"`
	Domain    *string `json:"domain"`
}

type TrackJourneyEventRequestBodyIdentificationUser struct {
	Email  *string `json:"email"`
	UserID *string `json:"userId"`
}

type TrackJourneyEventRequestBodyIdentification struct {
	Account *TrackJourneyEventRequestBodyIdentificationAccount `json:"account"`
	User    *TrackJourneyEventRequestBodyIdentificationUser    `json:"user"`
}

type TrackJourneyEventRequestBody struct {
	Identification TrackJourneyEventRequestBodyIdentification `json:"identification"`
	Metadata       map[string]interface{}                     `json:"metadata"`
	Name           string                                     `json:"name"`
	TriggeredAt    *string                                    `json:"triggeredAt"`
}

type TrackJourneyEventRequest struct {
	Request TrackJourneyEventRequestBody `request:"mediaType=application/json"`
}

type TrackJourneyEvent201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent201ApplicationJSON struct {
	Message string                                  `json:"message"`
	Meta    TrackJourneyEvent201ApplicationJSONMeta `json:"meta"`
}

type TrackJourneyEvent400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header"`
	Path   map[string]string `json:"path"`
	Query  map[string]string `json:"query"`
}

type TrackJourneyEvent400ApplicationJSONErrors struct {
	Fields     map[string]string                                    `json:"fields"`
	Parameters *TrackJourneyEvent400ApplicationJSONErrorsParameters `json:"parameters"`
}

type TrackJourneyEvent400ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent400ApplicationJSON struct {
	Errors  TrackJourneyEvent400ApplicationJSONErrors `json:"errors"`
	Message string                                    `json:"message"`
	Meta    TrackJourneyEvent400ApplicationJSONMeta   `json:"meta"`
}

type TrackJourneyEvent401ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent401ApplicationJSON struct {
	Message string                                  `json:"message"`
	Meta    TrackJourneyEvent401ApplicationJSONMeta `json:"meta"`
}

type TrackJourneyEvent403ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent403ApplicationJSON struct {
	Message string                                  `json:"message"`
	Meta    TrackJourneyEvent403ApplicationJSONMeta `json:"meta"`
}

type TrackJourneyEvent429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent429ApplicationJSON struct {
	Message string                                  `json:"message"`
	Meta    TrackJourneyEvent429ApplicationJSONMeta `json:"meta"`
}

type TrackJourneyEvent500ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent500ApplicationJSON struct {
	Message string                                  `json:"message"`
	Meta    TrackJourneyEvent500ApplicationJSONMeta `json:"meta"`
}

type TrackJourneyEventResponse struct {
	ContentType                               string
	Headers                                   map[string][]string
	StatusCode                                int64
	TrackJourneyEvent201ApplicationJSONObject *TrackJourneyEvent201ApplicationJSON
	TrackJourneyEvent400ApplicationJSONObject *TrackJourneyEvent400ApplicationJSON
	TrackJourneyEvent401ApplicationJSONObject *TrackJourneyEvent401ApplicationJSON
	TrackJourneyEvent403ApplicationJSONObject *TrackJourneyEvent403ApplicationJSON
	TrackJourneyEvent429ApplicationJSONObject *TrackJourneyEvent429ApplicationJSON
	TrackJourneyEvent500ApplicationJSONObject *TrackJourneyEvent500ApplicationJSON
}
