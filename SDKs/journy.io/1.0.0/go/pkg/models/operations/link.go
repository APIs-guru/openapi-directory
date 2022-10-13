package operations

type LinkRequestBodyIdentification struct {
	Email  *string `json:"email"`
	UserID *string `json:"userId"`
}

type LinkRequestBody struct {
	DeviceID       string                        `json:"deviceId"`
	Identification LinkRequestBodyIdentification `json:"identification"`
}

type LinkRequest struct {
	Request LinkRequestBody `request:"mediaType=application/json"`
}

type Link201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type Link201ApplicationJSON struct {
	Message string                     `json:"message"`
	Meta    Link201ApplicationJSONMeta `json:"meta"`
}

type Link400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header"`
	Path   map[string]string `json:"path"`
	Query  map[string]string `json:"query"`
}

type Link400ApplicationJSONErrors struct {
	Fields     map[string]string                       `json:"fields"`
	Parameters *Link400ApplicationJSONErrorsParameters `json:"parameters"`
}

type Link400ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type Link400ApplicationJSON struct {
	Errors  Link400ApplicationJSONErrors `json:"errors"`
	Message string                       `json:"message"`
	Meta    Link400ApplicationJSONMeta   `json:"meta"`
}

type Link401ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type Link401ApplicationJSON struct {
	Message string                     `json:"message"`
	Meta    Link401ApplicationJSONMeta `json:"meta"`
}

type Link403ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type Link403ApplicationJSON struct {
	Message string                     `json:"message"`
	Meta    Link403ApplicationJSONMeta `json:"meta"`
}

type Link429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type Link429ApplicationJSON struct {
	Message string                     `json:"message"`
	Meta    Link429ApplicationJSONMeta `json:"meta"`
}

type Link500ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type Link500ApplicationJSON struct {
	Message string                     `json:"message"`
	Meta    Link500ApplicationJSONMeta `json:"meta"`
}

type LinkResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	StatusCode                   int64
	Link201ApplicationJSONObject *Link201ApplicationJSON
	Link400ApplicationJSONObject *Link400ApplicationJSON
	Link401ApplicationJSONObject *Link401ApplicationJSON
	Link403ApplicationJSONObject *Link403ApplicationJSON
	Link429ApplicationJSONObject *Link429ApplicationJSON
	Link500ApplicationJSONObject *Link500ApplicationJSON
}
