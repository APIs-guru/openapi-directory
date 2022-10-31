package operations



type GetActionOrganizationFollowerCountQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetActionOrganizationFollowerCountRequest struct {
    QueryParams GetActionOrganizationFollowerCountQueryParams 
    
}

type GetActionOrganizationFollowerCountResponse struct {
    ContentType string 
    StatusCode int64 
    
}

