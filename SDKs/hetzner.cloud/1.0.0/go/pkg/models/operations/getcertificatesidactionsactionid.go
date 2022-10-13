package operations

type GetCertificatesIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCertificatesIDActionsActionIDRequest struct {
	PathParams GetCertificatesIDActionsActionIDPathParams
}

type GetCertificatesIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetCertificatesIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnumError   GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetCertificatesIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                              `json:"command"`
	Error     GetCertificatesIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []GetCertificatesIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    GetCertificatesIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetCertificatesIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetCertificatesIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetCertificatesIDActionsActionIDResponse struct {
	ActionResponse *GetCertificatesIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
