package operations



type TenancyTenantGroupsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type TenancyTenantGroupsDeleteRequest struct {
    PathParams TenancyTenantGroupsDeletePathParams 
    
}

type TenancyTenantGroupsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

