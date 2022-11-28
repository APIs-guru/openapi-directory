package operations

type PostCertificatesIDActionsRetryPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostCertificatesIDActionsRetryActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostCertificatesIDActionsRetryActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostCertificatesIDActionsRetryActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostCertificatesIDActionsRetryActionResponseActionStatusEnum string

const (
	PostCertificatesIDActionsRetryActionResponseActionStatusEnumSuccess PostCertificatesIDActionsRetryActionResponseActionStatusEnum = "success"
	PostCertificatesIDActionsRetryActionResponseActionStatusEnumRunning PostCertificatesIDActionsRetryActionResponseActionStatusEnum = "running"
	PostCertificatesIDActionsRetryActionResponseActionStatusEnumError   PostCertificatesIDActionsRetryActionResponseActionStatusEnum = "error"
)

type PostCertificatesIDActionsRetryActionResponseAction struct {
	Command   string                                                        `json:"command"`
	Error     PostCertificatesIDActionsRetryActionResponseActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostCertificatesIDActionsRetryActionResponseActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostCertificatesIDActionsRetryActionResponseActionStatusEnum  `json:"status"`
}

type PostCertificatesIDActionsRetryActionResponse struct {
	Action PostCertificatesIDActionsRetryActionResponseAction `json:"action"`
}

type PostCertificatesIDActionsRetryRequest struct {
	PathParams PostCertificatesIDActionsRetryPathParams
}

type PostCertificatesIDActionsRetryResponse struct {
	ActionResponse *PostCertificatesIDActionsRetryActionResponse
	ContentType    string
	StatusCode     int64
}
