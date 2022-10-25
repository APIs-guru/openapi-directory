package operations

type GetCertificatesIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCertificatesIDActionsActionIDRequest struct {
	PathParams GetCertificatesIDActionsActionIDPathParams
}

type GetCertificatesIDActionsActionIDActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetCertificatesIDActionsActionIDActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificatesIDActionsActionIDActionResponseActionStatusEnum string

const (
	GetCertificatesIDActionsActionIDActionResponseActionStatusEnumSuccess GetCertificatesIDActionsActionIDActionResponseActionStatusEnum = "success"
	GetCertificatesIDActionsActionIDActionResponseActionStatusEnumRunning GetCertificatesIDActionsActionIDActionResponseActionStatusEnum = "running"
	GetCertificatesIDActionsActionIDActionResponseActionStatusEnumError   GetCertificatesIDActionsActionIDActionResponseActionStatusEnum = "error"
)

type GetCertificatesIDActionsActionIDActionResponseAction struct {
	Command   string                                                          `json:"command"`
	Error     GetCertificatesIDActionsActionIDActionResponseActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []GetCertificatesIDActionsActionIDActionResponseActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    GetCertificatesIDActionsActionIDActionResponseActionStatusEnum  `json:"status"`
}

type GetCertificatesIDActionsActionIDActionResponse struct {
	Action GetCertificatesIDActionsActionIDActionResponseAction `json:"action"`
}

type GetCertificatesIDActionsActionIDResponse struct {
	ActionResponse *GetCertificatesIDActionsActionIDActionResponse
	ContentType    string
	StatusCode     int64
}
