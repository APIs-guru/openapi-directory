package operations

// UpsertAccountRequestBodyIdentification
// Account identification requires an accountId, domain or both
type UpsertAccountRequestBodyIdentification struct {
	AccountID *string `json:"accountId,omitempty"`
	Domain    *string `json:"domain,omitempty"`
}

// UpsertAccountRequestBodyMembersIdentification
// User identification requires a userId, email or both
type UpsertAccountRequestBodyMembersIdentification struct {
	Email  *string `json:"email,omitempty"`
	UserID *string `json:"userId,omitempty"`
}

// UpsertAccountRequestBodyMembers
// Identification requires an accountId, domain or both
type UpsertAccountRequestBodyMembers struct {
	Identification UpsertAccountRequestBodyMembersIdentification `json:"identification"`
}

// UpsertAccountRequestBody
// Update properties and/or members of an account
type UpsertAccountRequestBody struct {
	Identification UpsertAccountRequestBodyIdentification `json:"identification"`
	Members        []UpsertAccountRequestBodyMembers      `json:"members,omitempty"`
	Properties     map[string]interface{}                 `json:"properties,omitempty"`
}

type UpsertAccount201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertAccount201ApplicationJSON struct {
	Message string                              `json:"message"`
	Meta    UpsertAccount201ApplicationJSONMeta `json:"meta"`
}

// UpsertAccount400ApplicationJSONErrorsParameters
// All query-, header- and path- parameters that seemed incorrect
type UpsertAccount400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header,omitempty"`
	Path   map[string]string `json:"path,omitempty"`
	Query  map[string]string `json:"query,omitempty"`
}

// UpsertAccount400ApplicationJSONErrors
// Map that sums up all received values that seemed incorrect
type UpsertAccount400ApplicationJSONErrors struct {
	Fields     map[string]string                                `json:"fields,omitempty"`
	Parameters *UpsertAccount400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
}

type UpsertAccount400ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertAccount400ApplicationJSON struct {
	Errors  UpsertAccount400ApplicationJSONErrors `json:"errors"`
	Message string                                `json:"message"`
	Meta    UpsertAccount400ApplicationJSONMeta   `json:"meta"`
}

type UpsertAccount401ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertAccount401ApplicationJSON struct {
	Message string                              `json:"message"`
	Meta    UpsertAccount401ApplicationJSONMeta `json:"meta"`
}

type UpsertAccount429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertAccount429ApplicationJSON struct {
	Message string                              `json:"message"`
	Meta    UpsertAccount429ApplicationJSONMeta `json:"meta"`
}

type UpsertAccount500ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

type UpsertAccount500ApplicationJSON struct {
	Message string                              `json:"message"`
	Meta    UpsertAccount500ApplicationJSONMeta `json:"meta"`
}

type UpsertAccountRequest struct {
	Request UpsertAccountRequestBody `request:"mediaType=application/json"`
}

type UpsertAccountResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	UpsertAccount201ApplicationJSONObject *UpsertAccount201ApplicationJSON
	UpsertAccount400ApplicationJSONObject *UpsertAccount400ApplicationJSON
	UpsertAccount401ApplicationJSONObject *UpsertAccount401ApplicationJSON
	UpsertAccount429ApplicationJSONObject *UpsertAccount429ApplicationJSON
	UpsertAccount500ApplicationJSONObject *UpsertAccount500ApplicationJSON
}
