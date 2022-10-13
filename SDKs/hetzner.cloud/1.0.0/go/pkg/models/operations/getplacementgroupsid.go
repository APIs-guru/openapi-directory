package operations

type GetPlacementGroupsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPlacementGroupsIDRequest struct {
	PathParams GetPlacementGroupsIDPathParams
}

type GetPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum string

const (
	GetPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnumSpread GetPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum = "spread"
)

type GetPlacementGroupsID200ApplicationJSONPlacementGroupPlacementGroup struct {
	Created string                                                       `json:"created"`
	ID      int64                                                        `json:"id"`
	Labels  map[string]string                                            `json:"labels"`
	Name    string                                                       `json:"name"`
	Servers []int64                                                      `json:"servers"`
	Type    GetPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum `json:"type"`
}

type GetPlacementGroupsID200ApplicationJSONPlacementGroupResponse struct {
	PlacementGroup GetPlacementGroupsID200ApplicationJSONPlacementGroupPlacementGroup `json:"placement_group"`
}

type GetPlacementGroupsIDResponse struct {
	ContentType            string
	PlacementGroupResponse *GetPlacementGroupsID200ApplicationJSONPlacementGroupResponse
	StatusCode             int64
}
