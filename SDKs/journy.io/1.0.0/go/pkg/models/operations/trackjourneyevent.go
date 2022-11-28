package operations

// TrackJourneyEventRequestBodyIdentificationAccount
// Account identification requires an accountId, domain or both
type TrackJourneyEventRequestBodyIdentificationAccount struct {
	AccountID *string `json:"accountId,omitempty"`
	Domain    *string `json:"domain,omitempty"`
}

// TrackJourneyEventRequestBodyIdentificationUser
// User identification requires a userId, email or both
type TrackJourneyEventRequestBodyIdentificationUser struct {
	Email  *string `json:"email,omitempty"`
	UserID *string `json:"userId,omitempty"`
}

// TrackJourneyEventRequestBodyIdentification
// Event identification requires a user, account or both
type TrackJourneyEventRequestBodyIdentification struct {
	Account *TrackJourneyEventRequestBodyIdentificationAccount `json:"account,omitempty"`
	User    *TrackJourneyEventRequestBodyIdentificationUser    `json:"user,omitempty"`
}

// TrackJourneyEventRequestBody
// Event for a user or an account
type TrackJourneyEventRequestBody struct {
	Identification TrackJourneyEventRequestBodyIdentification `json:"identification"`
	Metadata       map[string]interface{}                     `json:"metadata,omitempty"`
	Name           string                                     `json:"name"`
	TriggeredAt    *string                                    `json:"triggeredAt,omitempty"`
}

type TrackJourneyEvent201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type TrackJourneyEvent201ApplicationJSON struct {
	Message string                                  `json:"message"`
	Meta    TrackJourneyEvent201ApplicationJSONMeta `json:"meta"`
}

// TrackJourneyEvent400ApplicationJSONErrorsParameters
// All query-, header- and path- parameters that seemed incorrect
type TrackJourneyEvent400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header,omitempty"`
	Path   map[string]string `json:"path,omitempty"`
	Query  map[string]string `json:"query,omitempty"`
}

// TrackJourneyEvent400ApplicationJSONErrors
// Map that sums up all received values that seemed incorrect
type TrackJourneyEvent400ApplicationJSONErrors struct {
	Fields     map[string]string                                    `json:"fields,omitempty"`
	Parameters *TrackJourneyEvent400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
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

type TrackJourneyEventRequest struct {
	Request TrackJourneyEventRequestBody `request:"mediaType=application/json"`
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
