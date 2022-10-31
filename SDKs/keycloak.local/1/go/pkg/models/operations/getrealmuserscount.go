package operations



type GetRealmUsersCountPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersCountQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    FirstName *string `queryParam:"style=form,explode=true,name=firstName"`
    LastName *string `queryParam:"style=form,explode=true,name=lastName"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetRealmUsersCountRequest struct {
    PathParams GetRealmUsersCountPathParams 
    QueryParams GetRealmUsersCountQueryParams 
    
}

type GetRealmUsersCountResponse struct {
    ContentType string 
    GetRealmUsersCount2XxApplicationJSONInt32Integer *int32 
    StatusCode int64 
    
}

