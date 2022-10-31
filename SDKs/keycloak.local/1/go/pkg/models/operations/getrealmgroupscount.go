package operations



type GetRealmGroupsCountPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsCountQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Top *bool `queryParam:"style=form,explode=true,name=top"`
    
}

type GetRealmGroupsCountRequest struct {
    PathParams GetRealmGroupsCountPathParams 
    QueryParams GetRealmGroupsCountQueryParams 
    
}

type GetRealmGroupsCountResponse struct {
    ContentType string 
    GetRealmGroupsCount2XxApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

