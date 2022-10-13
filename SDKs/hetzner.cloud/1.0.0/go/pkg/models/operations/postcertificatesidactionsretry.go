package operations

type PostCertificatesIDActionsRetryPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostCertificatesIDActionsRetryRequest struct {
	PathParams PostCertificatesIDActionsRetryPathParams
}

type PostCertificatesIDActionsRetry201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostCertificatesIDActionsRetry201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnum string

const (
	PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnumSuccess PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnum = "success"
	PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnumRunning PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnum = "running"
	PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnumError   PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnum = "error"
)

type PostCertificatesIDActionsRetry201ApplicationJSONActionAction struct {
	Command   string                                                            `json:"command"`
	Error     PostCertificatesIDActionsRetry201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                            `json:"finished"`
	ID        int64                                                             `json:"id"`
	Progress  float64                                                           `json:"progress"`
	Resources []PostCertificatesIDActionsRetry201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                            `json:"started"`
	Status    PostCertificatesIDActionsRetry201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostCertificatesIDActionsRetry201ApplicationJSONActionResponse struct {
	Action PostCertificatesIDActionsRetry201ApplicationJSONActionAction `json:"action"`
}

type PostCertificatesIDActionsRetryResponse struct {
	ActionResponse *PostCertificatesIDActionsRetry201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
