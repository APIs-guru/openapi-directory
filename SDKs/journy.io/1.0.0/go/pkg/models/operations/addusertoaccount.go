package operations

type AddUserToAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AddUserToAccountRequestBody struct {
	UserID string `json:"userId"`
}

type AddUserToAccountRequest struct {
	PathParams AddUserToAccountPathParams
	Request    AddUserToAccountRequestBody `request:"mediaType=application/json"`
}

type AddUserToAccount201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type AddUserToAccount201ApplicationJSON struct {
	Message string                                 `json:"message"`
	Meta    AddUserToAccount201ApplicationJSONMeta `json:"meta"`
}

type AddUserToAccount400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header"`
	Path   map[string]string `json:"path"`
	Query  map[string]string `json:"query"`
}

type AddUserToAccount400ApplicationJSONErrors struct {
	Fields     map[string]string                                   `json:"fields"`
	Parameters *AddUserToAccount400ApplicationJSONErrorsParameters `json:"parameters"`
}

type AddUserToAccount400ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type AddUserToAccount400ApplicationJSON struct {
	Errors  AddUserToAccount400ApplicationJSONErrors `json:"errors"`
	Message string                                   `json:"message"`
	Meta    AddUserToAccount400ApplicationJSONMeta   `json:"meta"`
}

type AddUserToAccount401ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type AddUserToAccount401ApplicationJSON struct {
	Message string                                 `json:"message"`
	Meta    AddUserToAccount401ApplicationJSONMeta `json:"meta"`
}

type AddUserToAccount429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type AddUserToAccount429ApplicationJSON struct {
	Message string                                 `json:"message"`
	Meta    AddUserToAccount429ApplicationJSONMeta `json:"meta"`
}

type AddUserToAccount500ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type AddUserToAccount500ApplicationJSON struct {
	Message string                                 `json:"message"`
	Meta    AddUserToAccount500ApplicationJSONMeta `json:"meta"`
}

type AddUserToAccountResponse struct {
	ContentType                              string
	Headers                                  map[string][]string
	StatusCode                               int64
	AddUserToAccount201ApplicationJSONObject *AddUserToAccount201ApplicationJSON
	AddUserToAccount400ApplicationJSONObject *AddUserToAccount400ApplicationJSON
	AddUserToAccount401ApplicationJSONObject *AddUserToAccount401ApplicationJSON
	AddUserToAccount429ApplicationJSONObject *AddUserToAccount429ApplicationJSON
	AddUserToAccount500ApplicationJSONObject *AddUserToAccount500ApplicationJSON
}
