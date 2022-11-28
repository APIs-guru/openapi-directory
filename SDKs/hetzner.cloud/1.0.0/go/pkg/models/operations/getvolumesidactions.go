package operations

type GetVolumesIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetVolumesIDActionsSortParameterSortEnum string

const (
	GetVolumesIDActionsSortParameterSortEnumID           GetVolumesIDActionsSortParameterSortEnum = "id"
	GetVolumesIDActionsSortParameterSortEnumIDAsc        GetVolumesIDActionsSortParameterSortEnum = "id:asc"
	GetVolumesIDActionsSortParameterSortEnumIDDesc       GetVolumesIDActionsSortParameterSortEnum = "id:desc"
	GetVolumesIDActionsSortParameterSortEnumCommand      GetVolumesIDActionsSortParameterSortEnum = "command"
	GetVolumesIDActionsSortParameterSortEnumCommandAsc   GetVolumesIDActionsSortParameterSortEnum = "command:asc"
	GetVolumesIDActionsSortParameterSortEnumCommandDesc  GetVolumesIDActionsSortParameterSortEnum = "command:desc"
	GetVolumesIDActionsSortParameterSortEnumStatus       GetVolumesIDActionsSortParameterSortEnum = "status"
	GetVolumesIDActionsSortParameterSortEnumStatusAsc    GetVolumesIDActionsSortParameterSortEnum = "status:asc"
	GetVolumesIDActionsSortParameterSortEnumStatusDesc   GetVolumesIDActionsSortParameterSortEnum = "status:desc"
	GetVolumesIDActionsSortParameterSortEnumProgress     GetVolumesIDActionsSortParameterSortEnum = "progress"
	GetVolumesIDActionsSortParameterSortEnumProgressAsc  GetVolumesIDActionsSortParameterSortEnum = "progress:asc"
	GetVolumesIDActionsSortParameterSortEnumProgressDesc GetVolumesIDActionsSortParameterSortEnum = "progress:desc"
	GetVolumesIDActionsSortParameterSortEnumStarted      GetVolumesIDActionsSortParameterSortEnum = "started"
	GetVolumesIDActionsSortParameterSortEnumStartedAsc   GetVolumesIDActionsSortParameterSortEnum = "started:asc"
	GetVolumesIDActionsSortParameterSortEnumStartedDesc  GetVolumesIDActionsSortParameterSortEnum = "started:desc"
	GetVolumesIDActionsSortParameterSortEnumFinished     GetVolumesIDActionsSortParameterSortEnum = "finished"
	GetVolumesIDActionsSortParameterSortEnumFinishedAsc  GetVolumesIDActionsSortParameterSortEnum = "finished:asc"
	GetVolumesIDActionsSortParameterSortEnumFinishedDesc GetVolumesIDActionsSortParameterSortEnum = "finished:desc"
)

type GetVolumesIDActionsStatusParameterStatusEnum string

const (
	GetVolumesIDActionsStatusParameterStatusEnumRunning GetVolumesIDActionsStatusParameterStatusEnum = "running"
	GetVolumesIDActionsStatusParameterStatusEnumSuccess GetVolumesIDActionsStatusParameterStatusEnum = "success"
	GetVolumesIDActionsStatusParameterStatusEnumError   GetVolumesIDActionsStatusParameterStatusEnum = "error"
)

type GetVolumesIDActionsQueryParams struct {
	Sort   *GetVolumesIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetVolumesIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

// GetVolumesIDActionsActionsResponseActionError
// Error message for the Action if error occurred, otherwise null
type GetVolumesIDActionsActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetVolumesIDActionsActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetVolumesIDActionsActionsResponseActionStatusEnum string

const (
	GetVolumesIDActionsActionsResponseActionStatusEnumSuccess GetVolumesIDActionsActionsResponseActionStatusEnum = "success"
	GetVolumesIDActionsActionsResponseActionStatusEnumRunning GetVolumesIDActionsActionsResponseActionStatusEnum = "running"
	GetVolumesIDActionsActionsResponseActionStatusEnumError   GetVolumesIDActionsActionsResponseActionStatusEnum = "error"
)

type GetVolumesIDActionsActionsResponseAction struct {
	Command   string                                              `json:"command"`
	Error     GetVolumesIDActionsActionsResponseActionError       `json:"error"`
	Finished  string                                              `json:"finished"`
	ID        int64                                               `json:"id"`
	Progress  float64                                             `json:"progress"`
	Resources []GetVolumesIDActionsActionsResponseActionResources `json:"resources"`
	Started   string                                              `json:"started"`
	Status    GetVolumesIDActionsActionsResponseActionStatusEnum  `json:"status"`
}

type GetVolumesIDActionsActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetVolumesIDActionsActionsResponseMeta struct {
	Pagination GetVolumesIDActionsActionsResponseMetaPagination `json:"pagination"`
}

type GetVolumesIDActionsActionsResponse struct {
	Actions []GetVolumesIDActionsActionsResponseAction `json:"actions"`
	Meta    *GetVolumesIDActionsActionsResponseMeta    `json:"meta,omitempty"`
}

type GetVolumesIDActionsRequest struct {
	PathParams  GetVolumesIDActionsPathParams
	QueryParams GetVolumesIDActionsQueryParams
}

type GetVolumesIDActionsResponse struct {
	ActionsResponse *GetVolumesIDActionsActionsResponse
	ContentType     string
	StatusCode      int64
}
