package operations

type GetActionsSortParameterSortEnum string

const (
	GetActionsSortParameterSortEnumID           GetActionsSortParameterSortEnum = "id"
	GetActionsSortParameterSortEnumIDAsc        GetActionsSortParameterSortEnum = "id:asc"
	GetActionsSortParameterSortEnumIDDesc       GetActionsSortParameterSortEnum = "id:desc"
	GetActionsSortParameterSortEnumCommand      GetActionsSortParameterSortEnum = "command"
	GetActionsSortParameterSortEnumCommandAsc   GetActionsSortParameterSortEnum = "command:asc"
	GetActionsSortParameterSortEnumCommandDesc  GetActionsSortParameterSortEnum = "command:desc"
	GetActionsSortParameterSortEnumStatus       GetActionsSortParameterSortEnum = "status"
	GetActionsSortParameterSortEnumStatusAsc    GetActionsSortParameterSortEnum = "status:asc"
	GetActionsSortParameterSortEnumStatusDesc   GetActionsSortParameterSortEnum = "status:desc"
	GetActionsSortParameterSortEnumProgress     GetActionsSortParameterSortEnum = "progress"
	GetActionsSortParameterSortEnumProgressAsc  GetActionsSortParameterSortEnum = "progress:asc"
	GetActionsSortParameterSortEnumProgressDesc GetActionsSortParameterSortEnum = "progress:desc"
	GetActionsSortParameterSortEnumStarted      GetActionsSortParameterSortEnum = "started"
	GetActionsSortParameterSortEnumStartedAsc   GetActionsSortParameterSortEnum = "started:asc"
	GetActionsSortParameterSortEnumStartedDesc  GetActionsSortParameterSortEnum = "started:desc"
	GetActionsSortParameterSortEnumFinished     GetActionsSortParameterSortEnum = "finished"
	GetActionsSortParameterSortEnumFinishedAsc  GetActionsSortParameterSortEnum = "finished:asc"
	GetActionsSortParameterSortEnumFinishedDesc GetActionsSortParameterSortEnum = "finished:desc"
)

type GetActionsStatusParameterStatusEnum string

const (
	GetActionsStatusParameterStatusEnumRunning GetActionsStatusParameterStatusEnum = "running"
	GetActionsStatusParameterStatusEnumSuccess GetActionsStatusParameterStatusEnum = "success"
	GetActionsStatusParameterStatusEnumError   GetActionsStatusParameterStatusEnum = "error"
)

type GetActionsQueryParams struct {
	ID     *int64                               `queryParam:"style=form,explode=true,name=id"`
	Sort   *GetActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

// GetActionsActionsResponseActionError
// Error message for the Action if error occurred, otherwise null
type GetActionsActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetActionsActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetActionsActionsResponseActionStatusEnum string

const (
	GetActionsActionsResponseActionStatusEnumSuccess GetActionsActionsResponseActionStatusEnum = "success"
	GetActionsActionsResponseActionStatusEnumRunning GetActionsActionsResponseActionStatusEnum = "running"
	GetActionsActionsResponseActionStatusEnumError   GetActionsActionsResponseActionStatusEnum = "error"
)

type GetActionsActionsResponseAction struct {
	Command   string                                     `json:"command"`
	Error     GetActionsActionsResponseActionError       `json:"error"`
	Finished  string                                     `json:"finished"`
	ID        int64                                      `json:"id"`
	Progress  float64                                    `json:"progress"`
	Resources []GetActionsActionsResponseActionResources `json:"resources"`
	Started   string                                     `json:"started"`
	Status    GetActionsActionsResponseActionStatusEnum  `json:"status"`
}

type GetActionsActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetActionsActionsResponseMeta struct {
	Pagination GetActionsActionsResponseMetaPagination `json:"pagination"`
}

type GetActionsActionsResponse struct {
	Actions []GetActionsActionsResponseAction `json:"actions"`
	Meta    *GetActionsActionsResponseMeta    `json:"meta,omitempty"`
}

type GetActionsRequest struct {
	QueryParams GetActionsQueryParams
}

type GetActionsResponse struct {
	ActionsResponse *GetActionsActionsResponse
	ContentType     string
	StatusCode      int64
}
