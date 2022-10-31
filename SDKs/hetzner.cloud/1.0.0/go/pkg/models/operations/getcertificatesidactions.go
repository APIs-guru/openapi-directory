package operations

type GetCertificatesIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCertificatesIDActionsSortParameterSortEnum string

const (
	GetCertificatesIDActionsSortParameterSortEnumID           GetCertificatesIDActionsSortParameterSortEnum = "id"
	GetCertificatesIDActionsSortParameterSortEnumIDAsc        GetCertificatesIDActionsSortParameterSortEnum = "id:asc"
	GetCertificatesIDActionsSortParameterSortEnumIDDesc       GetCertificatesIDActionsSortParameterSortEnum = "id:desc"
	GetCertificatesIDActionsSortParameterSortEnumCommand      GetCertificatesIDActionsSortParameterSortEnum = "command"
	GetCertificatesIDActionsSortParameterSortEnumCommandAsc   GetCertificatesIDActionsSortParameterSortEnum = "command:asc"
	GetCertificatesIDActionsSortParameterSortEnumCommandDesc  GetCertificatesIDActionsSortParameterSortEnum = "command:desc"
	GetCertificatesIDActionsSortParameterSortEnumStatus       GetCertificatesIDActionsSortParameterSortEnum = "status"
	GetCertificatesIDActionsSortParameterSortEnumStatusAsc    GetCertificatesIDActionsSortParameterSortEnum = "status:asc"
	GetCertificatesIDActionsSortParameterSortEnumStatusDesc   GetCertificatesIDActionsSortParameterSortEnum = "status:desc"
	GetCertificatesIDActionsSortParameterSortEnumProgress     GetCertificatesIDActionsSortParameterSortEnum = "progress"
	GetCertificatesIDActionsSortParameterSortEnumProgressAsc  GetCertificatesIDActionsSortParameterSortEnum = "progress:asc"
	GetCertificatesIDActionsSortParameterSortEnumProgressDesc GetCertificatesIDActionsSortParameterSortEnum = "progress:desc"
	GetCertificatesIDActionsSortParameterSortEnumStarted      GetCertificatesIDActionsSortParameterSortEnum = "started"
	GetCertificatesIDActionsSortParameterSortEnumStartedAsc   GetCertificatesIDActionsSortParameterSortEnum = "started:asc"
	GetCertificatesIDActionsSortParameterSortEnumStartedDesc  GetCertificatesIDActionsSortParameterSortEnum = "started:desc"
	GetCertificatesIDActionsSortParameterSortEnumFinished     GetCertificatesIDActionsSortParameterSortEnum = "finished"
	GetCertificatesIDActionsSortParameterSortEnumFinishedAsc  GetCertificatesIDActionsSortParameterSortEnum = "finished:asc"
	GetCertificatesIDActionsSortParameterSortEnumFinishedDesc GetCertificatesIDActionsSortParameterSortEnum = "finished:desc"
)

type GetCertificatesIDActionsStatusParameterStatusEnum string

const (
	GetCertificatesIDActionsStatusParameterStatusEnumRunning GetCertificatesIDActionsStatusParameterStatusEnum = "running"
	GetCertificatesIDActionsStatusParameterStatusEnumSuccess GetCertificatesIDActionsStatusParameterStatusEnum = "success"
	GetCertificatesIDActionsStatusParameterStatusEnumError   GetCertificatesIDActionsStatusParameterStatusEnum = "error"
)

type GetCertificatesIDActionsQueryParams struct {
	Sort   *GetCertificatesIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetCertificatesIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetCertificatesIDActionsRequest struct {
	PathParams  GetCertificatesIDActionsPathParams
	QueryParams GetCertificatesIDActionsQueryParams
}

type GetCertificatesIDActionsActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetCertificatesIDActionsActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificatesIDActionsActionsResponseActionStatusEnum string

const (
	GetCertificatesIDActionsActionsResponseActionStatusEnumSuccess GetCertificatesIDActionsActionsResponseActionStatusEnum = "success"
	GetCertificatesIDActionsActionsResponseActionStatusEnumRunning GetCertificatesIDActionsActionsResponseActionStatusEnum = "running"
	GetCertificatesIDActionsActionsResponseActionStatusEnumError   GetCertificatesIDActionsActionsResponseActionStatusEnum = "error"
)

type GetCertificatesIDActionsActionsResponseAction struct {
	Command   string                                                   `json:"command"`
	Error     GetCertificatesIDActionsActionsResponseActionError       `json:"error"`
	Finished  string                                                   `json:"finished"`
	ID        int64                                                    `json:"id"`
	Progress  float64                                                  `json:"progress"`
	Resources []GetCertificatesIDActionsActionsResponseActionResources `json:"resources"`
	Started   string                                                   `json:"started"`
	Status    GetCertificatesIDActionsActionsResponseActionStatusEnum  `json:"status"`
}

type GetCertificatesIDActionsActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetCertificatesIDActionsActionsResponseMeta struct {
	Pagination GetCertificatesIDActionsActionsResponseMetaPagination `json:"pagination"`
}

type GetCertificatesIDActionsActionsResponse struct {
	Actions []GetCertificatesIDActionsActionsResponseAction `json:"actions"`
	Meta    *GetCertificatesIDActionsActionsResponseMeta    `json:"meta,omitempty"`
}

type GetCertificatesIDActionsResponse struct {
	ActionsResponse *GetCertificatesIDActionsActionsResponse
	ContentType     string
	StatusCode      int64
}
