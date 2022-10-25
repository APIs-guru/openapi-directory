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

type GetServersIDActionsActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetServersIDActionsActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetServersIDActionsActionsResponseActionStatusEnum string

const (
	GetServersIDActionsActionsResponseActionStatusEnumSuccess GetServersIDActionsActionsResponseActionStatusEnum = "success"
	GetServersIDActionsActionsResponseActionStatusEnumRunning GetServersIDActionsActionsResponseActionStatusEnum = "running"
	GetServersIDActionsActionsResponseActionStatusEnumError   GetServersIDActionsActionsResponseActionStatusEnum = "error"
)

type GetServersIDActionsActionsResponseAction struct {
	Command   string                                              `json:"command"`
	Error     GetServersIDActionsActionsResponseActionError       `json:"error"`
	Finished  string                                              `json:"finished"`
	ID        int64                                               `json:"id"`
	Progress  float64                                             `json:"progress"`
	Resources []GetServersIDActionsActionsResponseActionResources `json:"resources"`
	Started   string                                              `json:"started"`
	Status    GetServersIDActionsActionsResponseActionStatusEnum  `json:"status"`
}

type GetServersIDActionsActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetServersIDActionsActionsResponseMeta struct {
	Pagination GetServersIDActionsActionsResponseMetaPagination `json:"pagination"`
}

type GetServersIDActionsActionsResponse struct {
	Actions []GetServersIDActionsActionsResponseAction `json:"actions"`
	Meta    *GetServersIDActionsActionsResponseMeta    `json:"meta,omitempty"`
}

type GetServersIDActionsResponse struct {
	ActionsResponse *GetServersIDActionsActionsResponse
	ContentType     string
	StatusCode      int64
}
