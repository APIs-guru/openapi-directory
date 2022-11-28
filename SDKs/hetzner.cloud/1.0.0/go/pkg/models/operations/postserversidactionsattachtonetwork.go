package operations

type PostServersIDActionsAttachToNetworkPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsAttachToNetworkAttachToNetworkRequest struct {
	AliasIps []string `json:"alias_ips,omitempty"`
	IP       *string  `json:"ip,omitempty"`
	Network  int64    `json:"network"`
}

// PostServersIDActionsAttachToNetworkActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostServersIDActionsAttachToNetworkActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsAttachToNetworkActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsAttachToNetworkActionResponseActionStatusEnum string

const (
	PostServersIDActionsAttachToNetworkActionResponseActionStatusEnumSuccess PostServersIDActionsAttachToNetworkActionResponseActionStatusEnum = "success"
	PostServersIDActionsAttachToNetworkActionResponseActionStatusEnumRunning PostServersIDActionsAttachToNetworkActionResponseActionStatusEnum = "running"
	PostServersIDActionsAttachToNetworkActionResponseActionStatusEnumError   PostServersIDActionsAttachToNetworkActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsAttachToNetworkActionResponseAction struct {
	Command   string                                                             `json:"command"`
	Error     PostServersIDActionsAttachToNetworkActionResponseActionError       `json:"error"`
	Finished  string                                                             `json:"finished"`
	ID        int64                                                              `json:"id"`
	Progress  float64                                                            `json:"progress"`
	Resources []PostServersIDActionsAttachToNetworkActionResponseActionResources `json:"resources"`
	Started   string                                                             `json:"started"`
	Status    PostServersIDActionsAttachToNetworkActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsAttachToNetworkActionResponse struct {
	Action PostServersIDActionsAttachToNetworkActionResponseAction `json:"action"`
}

type PostServersIDActionsAttachToNetworkRequest struct {
	PathParams PostServersIDActionsAttachToNetworkPathParams
	Request    *PostServersIDActionsAttachToNetworkAttachToNetworkRequest `request:"mediaType=application/json"`
}

type PostServersIDActionsAttachToNetworkResponse struct {
	ActionResponse *PostServersIDActionsAttachToNetworkActionResponse
	ContentType    string
	StatusCode     int64
}
