package operations

type GetPlacementGroupsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum string

const (
	GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnumSpread GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = "spread"
)

type GetPlacementGroupsIDPlacementGroupResponsePlacementGroup struct {
	Created string                                                           `json:"created"`
	ID      int64                                                            `json:"id"`
	Labels  map[string]string                                                `json:"labels"`
	Name    string                                                           `json:"name"`
	Servers []int64                                                          `json:"servers"`
	Type    GetPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum `json:"type"`
}

type GetPlacementGroupsIDPlacementGroupResponse struct {
	PlacementGroup GetPlacementGroupsIDPlacementGroupResponsePlacementGroup `json:"placement_group"`
}

type GetPlacementGroupsIDRequest struct {
	PathParams GetPlacementGroupsIDPathParams
}

type GetPlacementGroupsIDResponse struct {
	ContentType            string
	PlacementGroupResponse *GetPlacementGroupsIDPlacementGroupResponse
	StatusCode             int64
}
