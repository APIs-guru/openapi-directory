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

type GetActionsRequest struct {
	QueryParams GetActionsQueryParams
}

type GetActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetActions200ApplicationJSONActionsStatusEnum string

const (
	GetActions200ApplicationJSONActionsStatusEnumSuccess GetActions200ApplicationJSONActionsStatusEnum = "success"
	GetActions200ApplicationJSONActionsStatusEnumRunning GetActions200ApplicationJSONActionsStatusEnum = "running"
	GetActions200ApplicationJSONActionsStatusEnumError   GetActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetActions200ApplicationJSONActionsAction struct {
	Command   string                                         `json:"command"`
	Error     GetActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                         `json:"finished"`
	ID        int64                                          `json:"id"`
	Progress  float64                                        `json:"progress"`
	Resources []GetActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                         `json:"started"`
	Status    GetActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetActions200ApplicationJSONMeta struct {
	Pagination GetActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetActions200ApplicationJSONActionsResponse struct {
	Actions []GetActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetActions200ApplicationJSONMeta           `json:"meta,omitempty"`
}

type GetActionsResponse struct {
	ActionsResponse *GetActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
