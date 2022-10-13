package operations

type GetServersIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetServersIDActionsSortParameterSortEnum string

const (
	GetServersIDActionsSortParameterSortEnumID           GetServersIDActionsSortParameterSortEnum = "id"
	GetServersIDActionsSortParameterSortEnumIDAsc        GetServersIDActionsSortParameterSortEnum = "id:asc"
	GetServersIDActionsSortParameterSortEnumIDDesc       GetServersIDActionsSortParameterSortEnum = "id:desc"
	GetServersIDActionsSortParameterSortEnumCommand      GetServersIDActionsSortParameterSortEnum = "command"
	GetServersIDActionsSortParameterSortEnumCommandAsc   GetServersIDActionsSortParameterSortEnum = "command:asc"
	GetServersIDActionsSortParameterSortEnumCommandDesc  GetServersIDActionsSortParameterSortEnum = "command:desc"
	GetServersIDActionsSortParameterSortEnumStatus       GetServersIDActionsSortParameterSortEnum = "status"
	GetServersIDActionsSortParameterSortEnumStatusAsc    GetServersIDActionsSortParameterSortEnum = "status:asc"
	GetServersIDActionsSortParameterSortEnumStatusDesc   GetServersIDActionsSortParameterSortEnum = "status:desc"
	GetServersIDActionsSortParameterSortEnumProgress     GetServersIDActionsSortParameterSortEnum = "progress"
	GetServersIDActionsSortParameterSortEnumProgressAsc  GetServersIDActionsSortParameterSortEnum = "progress:asc"
	GetServersIDActionsSortParameterSortEnumProgressDesc GetServersIDActionsSortParameterSortEnum = "progress:desc"
	GetServersIDActionsSortParameterSortEnumStarted      GetServersIDActionsSortParameterSortEnum = "started"
	GetServersIDActionsSortParameterSortEnumStartedAsc   GetServersIDActionsSortParameterSortEnum = "started:asc"
	GetServersIDActionsSortParameterSortEnumStartedDesc  GetServersIDActionsSortParameterSortEnum = "started:desc"
	GetServersIDActionsSortParameterSortEnumFinished     GetServersIDActionsSortParameterSortEnum = "finished"
	GetServersIDActionsSortParameterSortEnumFinishedAsc  GetServersIDActionsSortParameterSortEnum = "finished:asc"
	GetServersIDActionsSortParameterSortEnumFinishedDesc GetServersIDActionsSortParameterSortEnum = "finished:desc"
)

type GetServersIDActionsStatusParameterStatusEnum string

const (
	GetServersIDActionsStatusParameterStatusEnumRunning GetServersIDActionsStatusParameterStatusEnum = "running"
	GetServersIDActionsStatusParameterStatusEnumSuccess GetServersIDActionsStatusParameterStatusEnum = "success"
	GetServersIDActionsStatusParameterStatusEnumError   GetServersIDActionsStatusParameterStatusEnum = "error"
)

type GetServersIDActionsQueryParams struct {
	Sort   *GetServersIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetServersIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetServersIDActionsRequest struct {
	PathParams  GetServersIDActionsPathParams
	QueryParams GetServersIDActionsQueryParams
}

type GetServersIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetServersIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetServersIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetServersIDActions200ApplicationJSONActionsStatusEnumSuccess GetServersIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetServersIDActions200ApplicationJSONActionsStatusEnumRunning GetServersIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetServersIDActions200ApplicationJSONActionsStatusEnumError   GetServersIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetServersIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                  `json:"command"`
	Error     GetServersIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                  `json:"finished"`
	ID        int64                                                   `json:"id"`
	Progress  float64                                                 `json:"progress"`
	Resources []GetServersIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                  `json:"started"`
	Status    GetServersIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetServersIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetServersIDActions200ApplicationJSONMeta struct {
	Pagination GetServersIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetServersIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetServersIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetServersIDActions200ApplicationJSONMeta           `json:"meta"`
}

type GetServersIDActionsResponse struct {
	ActionsResponse *GetServersIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
