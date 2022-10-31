package operations



type DeleteRealmRolesByIDRoleIDPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
    
}

type DeleteRealmRolesByIDRoleIDRequest struct {
    PathParams DeleteRealmRolesByIDRoleIDPathParams 
    
}

type DeleteRealmRolesByIDRoleIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

