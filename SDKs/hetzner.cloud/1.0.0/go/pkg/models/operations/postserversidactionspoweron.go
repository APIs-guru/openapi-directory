package operations

type PostServersIDActionsPoweronPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsPoweronRequest struct {
	PathParams PostServersIDActionsPoweronPathParams
}

type PostServersIDActionsPoweronActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsPoweronActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsPoweronActionResponseActionStatusEnum string

const (
	PostServersIDActionsPoweronActionResponseActionStatusEnumSuccess PostServersIDActionsPoweronActionResponseActionStatusEnum = "success"
	PostServersIDActionsPoweronActionResponseActionStatusEnumRunning PostServersIDActionsPoweronActionResponseActionStatusEnum = "running"
	PostServersIDActionsPoweronActionResponseActionStatusEnumError   PostServersIDActionsPoweronActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsPoweronActionResponseAction struct {
	Command   string                                                     `json:"command"`
	Error     PostServersIDActionsPoweronActionResponseActionError       `json:"error"`
	Finished  string                                                     `json:"finished"`
	ID        int64                                                      `json:"id"`
	Progress  float64                                                    `json:"progress"`
	Resources []PostServersIDActionsPoweronActionResponseActionResources `json:"resources"`
	Started   string                                                     `json:"started"`
	Status    PostServersIDActionsPoweronActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsPoweronActionResponse struct {
	Action PostServersIDActionsPoweronActionResponseAction `json:"action"`
}

type PostServersIDActionsPoweronResponse struct {
	ActionResponse *PostServersIDActionsPoweronActionResponse
	ContentType    string
	StatusCode     int64
}
