package operations

type DeleteRealmDefaultGroupsGroupIDPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
	Realm   string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmDefaultGroupsGroupIDRequest struct {
	PathParams DeleteRealmDefaultGroupsGroupIDPathParams
}

type DeleteRealmDefaultGroupsGroupIDResponse struct {
	ContentType string
	StatusCode  int64
}
