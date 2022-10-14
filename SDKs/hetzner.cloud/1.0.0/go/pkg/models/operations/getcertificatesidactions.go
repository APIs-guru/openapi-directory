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

type GetCertificatesIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetCertificatesIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificatesIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetCertificatesIDActions200ApplicationJSONActionsStatusEnumSuccess GetCertificatesIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetCertificatesIDActions200ApplicationJSONActionsStatusEnumRunning GetCertificatesIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetCertificatesIDActions200ApplicationJSONActionsStatusEnumError   GetCertificatesIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetCertificatesIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                       `json:"command"`
	Error     GetCertificatesIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                       `json:"finished"`
	ID        int64                                                        `json:"id"`
	Progress  float64                                                      `json:"progress"`
	Resources []GetCertificatesIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                       `json:"started"`
	Status    GetCertificatesIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetCertificatesIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetCertificatesIDActions200ApplicationJSONMeta struct {
	Pagination GetCertificatesIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetCertificatesIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetCertificatesIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetCertificatesIDActions200ApplicationJSONMeta           `json:"meta,omitempty"`
}

type GetCertificatesIDActionsResponse struct {
	ActionsResponse *GetCertificatesIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
