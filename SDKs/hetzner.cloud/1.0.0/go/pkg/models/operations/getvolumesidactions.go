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

type GetVolumesIDActionsRequest struct {
	PathParams  GetVolumesIDActionsPathParams
	QueryParams GetVolumesIDActionsQueryParams
}

type GetVolumesIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetVolumesIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetVolumesIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetVolumesIDActions200ApplicationJSONActionsStatusEnumSuccess GetVolumesIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetVolumesIDActions200ApplicationJSONActionsStatusEnumRunning GetVolumesIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetVolumesIDActions200ApplicationJSONActionsStatusEnumError   GetVolumesIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetVolumesIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                  `json:"command"`
	Error     GetVolumesIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                  `json:"finished"`
	ID        int64                                                   `json:"id"`
	Progress  float64                                                 `json:"progress"`
	Resources []GetVolumesIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                  `json:"started"`
	Status    GetVolumesIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetVolumesIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetVolumesIDActions200ApplicationJSONMeta struct {
	Pagination GetVolumesIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetVolumesIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetVolumesIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetVolumesIDActions200ApplicationJSONMeta           `json:"meta"`
}

type GetVolumesIDActionsResponse struct {
	ActionsResponse *GetVolumesIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
