package operations

type GetNetworksIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetNetworksIDActionsSortParameterSortEnum string

const (
	GetNetworksIDActionsSortParameterSortEnumID           GetNetworksIDActionsSortParameterSortEnum = "id"
	GetNetworksIDActionsSortParameterSortEnumIDAsc        GetNetworksIDActionsSortParameterSortEnum = "id:asc"
	GetNetworksIDActionsSortParameterSortEnumIDDesc       GetNetworksIDActionsSortParameterSortEnum = "id:desc"
	GetNetworksIDActionsSortParameterSortEnumCommand      GetNetworksIDActionsSortParameterSortEnum = "command"
	GetNetworksIDActionsSortParameterSortEnumCommandAsc   GetNetworksIDActionsSortParameterSortEnum = "command:asc"
	GetNetworksIDActionsSortParameterSortEnumCommandDesc  GetNetworksIDActionsSortParameterSortEnum = "command:desc"
	GetNetworksIDActionsSortParameterSortEnumStatus       GetNetworksIDActionsSortParameterSortEnum = "status"
	GetNetworksIDActionsSortParameterSortEnumStatusAsc    GetNetworksIDActionsSortParameterSortEnum = "status:asc"
	GetNetworksIDActionsSortParameterSortEnumStatusDesc   GetNetworksIDActionsSortParameterSortEnum = "status:desc"
	GetNetworksIDActionsSortParameterSortEnumProgress     GetNetworksIDActionsSortParameterSortEnum = "progress"
	GetNetworksIDActionsSortParameterSortEnumProgressAsc  GetNetworksIDActionsSortParameterSortEnum = "progress:asc"
	GetNetworksIDActionsSortParameterSortEnumProgressDesc GetNetworksIDActionsSortParameterSortEnum = "progress:desc"
	GetNetworksIDActionsSortParameterSortEnumStarted      GetNetworksIDActionsSortParameterSortEnum = "started"
	GetNetworksIDActionsSortParameterSortEnumStartedAsc   GetNetworksIDActionsSortParameterSortEnum = "started:asc"
	GetNetworksIDActionsSortParameterSortEnumStartedDesc  GetNetworksIDActionsSortParameterSortEnum = "started:desc"
	GetNetworksIDActionsSortParameterSortEnumFinished     GetNetworksIDActionsSortParameterSortEnum = "finished"
	GetNetworksIDActionsSortParameterSortEnumFinishedAsc  GetNetworksIDActionsSortParameterSortEnum = "finished:asc"
	GetNetworksIDActionsSortParameterSortEnumFinishedDesc GetNetworksIDActionsSortParameterSortEnum = "finished:desc"
)

type GetNetworksIDActionsStatusParameterStatusEnum string

const (
	GetNetworksIDActionsStatusParameterStatusEnumRunning GetNetworksIDActionsStatusParameterStatusEnum = "running"
	GetNetworksIDActionsStatusParameterStatusEnumSuccess GetNetworksIDActionsStatusParameterStatusEnum = "success"
	GetNetworksIDActionsStatusParameterStatusEnumError   GetNetworksIDActionsStatusParameterStatusEnum = "error"
)

type GetNetworksIDActionsQueryParams struct {
	Sort   *GetNetworksIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetNetworksIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

// GetNetworksIDActionsActionsResponseActionError
// Error message for the Action if error occurred, otherwise null
type GetNetworksIDActionsActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetNetworksIDActionsActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetNetworksIDActionsActionsResponseActionStatusEnum string

const (
	GetNetworksIDActionsActionsResponseActionStatusEnumSuccess GetNetworksIDActionsActionsResponseActionStatusEnum = "success"
	GetNetworksIDActionsActionsResponseActionStatusEnumRunning GetNetworksIDActionsActionsResponseActionStatusEnum = "running"
	GetNetworksIDActionsActionsResponseActionStatusEnumError   GetNetworksIDActionsActionsResponseActionStatusEnum = "error"
)

type GetNetworksIDActionsActionsResponseAction struct {
	Command   string                                               `json:"command"`
	Error     GetNetworksIDActionsActionsResponseActionError       `json:"error"`
	Finished  string                                               `json:"finished"`
	ID        int64                                                `json:"id"`
	Progress  float64                                              `json:"progress"`
	Resources []GetNetworksIDActionsActionsResponseActionResources `json:"resources"`
	Started   string                                               `json:"started"`
	Status    GetNetworksIDActionsActionsResponseActionStatusEnum  `json:"status"`
}

type GetNetworksIDActionsActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetNetworksIDActionsActionsResponseMeta struct {
	Pagination GetNetworksIDActionsActionsResponseMetaPagination `json:"pagination"`
}

type GetNetworksIDActionsActionsResponse struct {
	Actions []GetNetworksIDActionsActionsResponseAction `json:"actions"`
	Meta    *GetNetworksIDActionsActionsResponseMeta    `json:"meta,omitempty"`
}

type GetNetworksIDActionsRequest struct {
	PathParams  GetNetworksIDActionsPathParams
	QueryParams GetNetworksIDActionsQueryParams
}

type GetNetworksIDActionsResponse struct {
	ActionsResponse *GetNetworksIDActionsActionsResponse
	ContentType     string
	StatusCode      int64
}
