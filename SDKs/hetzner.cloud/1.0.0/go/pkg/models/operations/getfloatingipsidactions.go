package operations

type GetFloatingIpsIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFloatingIpsIDActionsSortParameterSortEnum string

const (
	GetFloatingIpsIDActionsSortParameterSortEnumID           GetFloatingIpsIDActionsSortParameterSortEnum = "id"
	GetFloatingIpsIDActionsSortParameterSortEnumIDAsc        GetFloatingIpsIDActionsSortParameterSortEnum = "id:asc"
	GetFloatingIpsIDActionsSortParameterSortEnumIDDesc       GetFloatingIpsIDActionsSortParameterSortEnum = "id:desc"
	GetFloatingIpsIDActionsSortParameterSortEnumCommand      GetFloatingIpsIDActionsSortParameterSortEnum = "command"
	GetFloatingIpsIDActionsSortParameterSortEnumCommandAsc   GetFloatingIpsIDActionsSortParameterSortEnum = "command:asc"
	GetFloatingIpsIDActionsSortParameterSortEnumCommandDesc  GetFloatingIpsIDActionsSortParameterSortEnum = "command:desc"
	GetFloatingIpsIDActionsSortParameterSortEnumStatus       GetFloatingIpsIDActionsSortParameterSortEnum = "status"
	GetFloatingIpsIDActionsSortParameterSortEnumStatusAsc    GetFloatingIpsIDActionsSortParameterSortEnum = "status:asc"
	GetFloatingIpsIDActionsSortParameterSortEnumStatusDesc   GetFloatingIpsIDActionsSortParameterSortEnum = "status:desc"
	GetFloatingIpsIDActionsSortParameterSortEnumProgress     GetFloatingIpsIDActionsSortParameterSortEnum = "progress"
	GetFloatingIpsIDActionsSortParameterSortEnumProgressAsc  GetFloatingIpsIDActionsSortParameterSortEnum = "progress:asc"
	GetFloatingIpsIDActionsSortParameterSortEnumProgressDesc GetFloatingIpsIDActionsSortParameterSortEnum = "progress:desc"
	GetFloatingIpsIDActionsSortParameterSortEnumStarted      GetFloatingIpsIDActionsSortParameterSortEnum = "started"
	GetFloatingIpsIDActionsSortParameterSortEnumStartedAsc   GetFloatingIpsIDActionsSortParameterSortEnum = "started:asc"
	GetFloatingIpsIDActionsSortParameterSortEnumStartedDesc  GetFloatingIpsIDActionsSortParameterSortEnum = "started:desc"
	GetFloatingIpsIDActionsSortParameterSortEnumFinished     GetFloatingIpsIDActionsSortParameterSortEnum = "finished"
	GetFloatingIpsIDActionsSortParameterSortEnumFinishedAsc  GetFloatingIpsIDActionsSortParameterSortEnum = "finished:asc"
	GetFloatingIpsIDActionsSortParameterSortEnumFinishedDesc GetFloatingIpsIDActionsSortParameterSortEnum = "finished:desc"
)

type GetFloatingIpsIDActionsStatusParameterStatusEnum string

const (
	GetFloatingIpsIDActionsStatusParameterStatusEnumRunning GetFloatingIpsIDActionsStatusParameterStatusEnum = "running"
	GetFloatingIpsIDActionsStatusParameterStatusEnumSuccess GetFloatingIpsIDActionsStatusParameterStatusEnum = "success"
	GetFloatingIpsIDActionsStatusParameterStatusEnumError   GetFloatingIpsIDActionsStatusParameterStatusEnum = "error"
)

type GetFloatingIpsIDActionsQueryParams struct {
	Sort   *GetFloatingIpsIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetFloatingIpsIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetFloatingIpsIDActionsRequest struct {
	PathParams  GetFloatingIpsIDActionsPathParams
	QueryParams GetFloatingIpsIDActionsQueryParams
}

type GetFloatingIpsIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetFloatingIpsIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnumSuccess GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnumRunning GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnumError   GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetFloatingIpsIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                      `json:"command"`
	Error     GetFloatingIpsIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                      `json:"finished"`
	ID        int64                                                       `json:"id"`
	Progress  float64                                                     `json:"progress"`
	Resources []GetFloatingIpsIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                      `json:"started"`
	Status    GetFloatingIpsIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetFloatingIpsIDActions200ApplicationJSON struct {
	Actions []GetFloatingIpsIDActions200ApplicationJSONActionsAction `json:"actions"`
}

type GetFloatingIpsIDActionsResponse struct {
	ContentType                                     string
	GetFloatingIpsIDActions200ApplicationJSONObject *GetFloatingIpsIDActions200ApplicationJSON
	StatusCode                                      int64
}
