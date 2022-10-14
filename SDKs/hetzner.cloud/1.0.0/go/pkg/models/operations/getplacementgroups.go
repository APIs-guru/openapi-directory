package operations

type GetPlacementGroupsSortEnum string

const (
	GetPlacementGroupsSortEnumID          GetPlacementGroupsSortEnum = "id"
	GetPlacementGroupsSortEnumIDAsc       GetPlacementGroupsSortEnum = "id:asc"
	GetPlacementGroupsSortEnumIDDesc      GetPlacementGroupsSortEnum = "id:desc"
	GetPlacementGroupsSortEnumName        GetPlacementGroupsSortEnum = "name"
	GetPlacementGroupsSortEnumNameAsc     GetPlacementGroupsSortEnum = "name:asc"
	GetPlacementGroupsSortEnumNameDesc    GetPlacementGroupsSortEnum = "name:desc"
	GetPlacementGroupsSortEnumCreated     GetPlacementGroupsSortEnum = "created"
	GetPlacementGroupsSortEnumCreatedAsc  GetPlacementGroupsSortEnum = "created:asc"
	GetPlacementGroupsSortEnumCreatedDesc GetPlacementGroupsSortEnum = "created:desc"
)

type GetPlacementGroupsTypeParameterTypeEnum string

const (
	GetPlacementGroupsTypeParameterTypeEnumSpread GetPlacementGroupsTypeParameterTypeEnum = "spread"
)

type GetPlacementGroupsQueryParams struct {
	LabelSelector *string                                  `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string                                  `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetPlacementGroupsSortEnum              `queryParam:"style=form,explode=true,name=sort"`
	Type          *GetPlacementGroupsTypeParameterTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetPlacementGroupsRequest struct {
	QueryParams GetPlacementGroupsQueryParams
}

type GetPlacementGroups200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetPlacementGroups200ApplicationJSONMeta struct {
	Pagination GetPlacementGroups200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetPlacementGroups200ApplicationJSONPlacementGroupsTypeEnum string

const (
	GetPlacementGroups200ApplicationJSONPlacementGroupsTypeEnumSpread GetPlacementGroups200ApplicationJSONPlacementGroupsTypeEnum = "spread"
)

type GetPlacementGroups200ApplicationJSONPlacementGroupsPlacementGroup struct {
	Created string                                                      `json:"created"`
	ID      int64                                                       `json:"id"`
	Labels  map[string]string                                           `json:"labels"`
	Name    string                                                      `json:"name"`
	Servers []int64                                                     `json:"servers"`
	Type    GetPlacementGroups200ApplicationJSONPlacementGroupsTypeEnum `json:"type"`
}

type GetPlacementGroups200ApplicationJSONPlacementGroupsResponse struct {
	Meta            *GetPlacementGroups200ApplicationJSONMeta                           `json:"meta,omitempty"`
	PlacementGroups []GetPlacementGroups200ApplicationJSONPlacementGroupsPlacementGroup `json:"placement_groups"`
}

type GetPlacementGroupsResponse struct {
	ContentType             string
	PlacementGroupsResponse *GetPlacementGroups200ApplicationJSONPlacementGroupsResponse
	StatusCode              int64
}
