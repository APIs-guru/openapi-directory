package operations

type GetLoadBalancersIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetLoadBalancersIDActionsSortParameterSortEnum string

const (
	GetLoadBalancersIDActionsSortParameterSortEnumID           GetLoadBalancersIDActionsSortParameterSortEnum = "id"
	GetLoadBalancersIDActionsSortParameterSortEnumIDAsc        GetLoadBalancersIDActionsSortParameterSortEnum = "id:asc"
	GetLoadBalancersIDActionsSortParameterSortEnumIDDesc       GetLoadBalancersIDActionsSortParameterSortEnum = "id:desc"
	GetLoadBalancersIDActionsSortParameterSortEnumCommand      GetLoadBalancersIDActionsSortParameterSortEnum = "command"
	GetLoadBalancersIDActionsSortParameterSortEnumCommandAsc   GetLoadBalancersIDActionsSortParameterSortEnum = "command:asc"
	GetLoadBalancersIDActionsSortParameterSortEnumCommandDesc  GetLoadBalancersIDActionsSortParameterSortEnum = "command:desc"
	GetLoadBalancersIDActionsSortParameterSortEnumStatus       GetLoadBalancersIDActionsSortParameterSortEnum = "status"
	GetLoadBalancersIDActionsSortParameterSortEnumStatusAsc    GetLoadBalancersIDActionsSortParameterSortEnum = "status:asc"
	GetLoadBalancersIDActionsSortParameterSortEnumStatusDesc   GetLoadBalancersIDActionsSortParameterSortEnum = "status:desc"
	GetLoadBalancersIDActionsSortParameterSortEnumProgress     GetLoadBalancersIDActionsSortParameterSortEnum = "progress"
	GetLoadBalancersIDActionsSortParameterSortEnumProgressAsc  GetLoadBalancersIDActionsSortParameterSortEnum = "progress:asc"
	GetLoadBalancersIDActionsSortParameterSortEnumProgressDesc GetLoadBalancersIDActionsSortParameterSortEnum = "progress:desc"
	GetLoadBalancersIDActionsSortParameterSortEnumStarted      GetLoadBalancersIDActionsSortParameterSortEnum = "started"
	GetLoadBalancersIDActionsSortParameterSortEnumStartedAsc   GetLoadBalancersIDActionsSortParameterSortEnum = "started:asc"
	GetLoadBalancersIDActionsSortParameterSortEnumStartedDesc  GetLoadBalancersIDActionsSortParameterSortEnum = "started:desc"
	GetLoadBalancersIDActionsSortParameterSortEnumFinished     GetLoadBalancersIDActionsSortParameterSortEnum = "finished"
	GetLoadBalancersIDActionsSortParameterSortEnumFinishedAsc  GetLoadBalancersIDActionsSortParameterSortEnum = "finished:asc"
	GetLoadBalancersIDActionsSortParameterSortEnumFinishedDesc GetLoadBalancersIDActionsSortParameterSortEnum = "finished:desc"
)

type GetLoadBalancersIDActionsStatusParameterStatusEnum string

const (
	GetLoadBalancersIDActionsStatusParameterStatusEnumRunning GetLoadBalancersIDActionsStatusParameterStatusEnum = "running"
	GetLoadBalancersIDActionsStatusParameterStatusEnumSuccess GetLoadBalancersIDActionsStatusParameterStatusEnum = "success"
	GetLoadBalancersIDActionsStatusParameterStatusEnumError   GetLoadBalancersIDActionsStatusParameterStatusEnum = "error"
)

type GetLoadBalancersIDActionsQueryParams struct {
	Sort   *GetLoadBalancersIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetLoadBalancersIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetLoadBalancersIDActionsRequest struct {
	PathParams  GetLoadBalancersIDActionsPathParams
	QueryParams GetLoadBalancersIDActionsQueryParams
}

type GetLoadBalancersIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetLoadBalancersIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnumSuccess GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnumRunning GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnumError   GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetLoadBalancersIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                        `json:"command"`
	Error     GetLoadBalancersIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []GetLoadBalancersIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetLoadBalancersIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetLoadBalancersIDActions200ApplicationJSONMeta struct {
	Pagination GetLoadBalancersIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetLoadBalancersIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetLoadBalancersIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetLoadBalancersIDActions200ApplicationJSONMeta           `json:"meta,omitempty"`
}

type GetLoadBalancersIDActionsResponse struct {
	ActionsResponse *GetLoadBalancersIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
