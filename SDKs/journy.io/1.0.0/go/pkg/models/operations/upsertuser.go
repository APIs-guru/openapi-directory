package operations

type UpsertUserRequestBodyIdentification struct {
	Email  *string `json:"email"`
	UserID *string `json:"userId"`
}

type UpsertUserRequestBody struct {
	Identification UpsertUserRequestBodyIdentification `json:"identification"`
	Properties     map[string]interface{}              `json:"properties"`
}

type UpsertUserRequest struct {
	Request UpsertUserRequestBody `request:"mediaType=application/json"`
}

type UpsertUser201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertUser201ApplicationJSON struct {
	Message string                           `json:"message"`
	Meta    UpsertUser201ApplicationJSONMeta `json:"meta"`
}

type UpsertUser400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header"`
	Path   map[string]string `json:"path"`
	Query  map[string]string `json:"query"`
}

type UpsertUser400ApplicationJSONErrors struct {
	Fields     map[string]string                             `json:"fields"`
	Parameters *UpsertUser400ApplicationJSONErrorsParameters `json:"parameters"`
}

type UpsertUser400ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertUser400ApplicationJSON struct {
	Errors  UpsertUser400ApplicationJSONErrors `json:"errors"`
	Message string                             `json:"message"`
	Meta    UpsertUser400ApplicationJSONMeta   `json:"meta"`
}

type UpsertUser401ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertUser401ApplicationJSON struct {
	Message string                           `json:"message"`
	Meta    UpsertUser401ApplicationJSONMeta `json:"meta"`
}

type UpsertUser403ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertUser403ApplicationJSON struct {
	Message string                           `json:"message"`
	Meta    UpsertUser403ApplicationJSONMeta `json:"meta"`
}

type UpsertUser429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertUser429ApplicationJSON struct {
	Message string                           `json:"message"`
	Meta    UpsertUser429ApplicationJSONMeta `json:"meta"`
}

type UpsertUser500ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertUser500ApplicationJSON struct {
	Message string                           `json:"message"`
	Meta    UpsertUser500ApplicationJSONMeta `json:"meta"`
}

type UpsertUserResponse struct {
	ContentType                        string
	Headers                            map[string][]string
	StatusCode                         int64
	UpsertUser201ApplicationJSONObject *UpsertUser201ApplicationJSON
	UpsertUser400ApplicationJSONObject *UpsertUser400ApplicationJSON
	UpsertUser401ApplicationJSONObject *UpsertUser401ApplicationJSON
	UpsertUser403ApplicationJSONObject *UpsertUser403ApplicationJSON
	UpsertUser429ApplicationJSONObject *UpsertUser429ApplicationJSON
	UpsertUser500ApplicationJSONObject *UpsertUser500ApplicationJSON
}
