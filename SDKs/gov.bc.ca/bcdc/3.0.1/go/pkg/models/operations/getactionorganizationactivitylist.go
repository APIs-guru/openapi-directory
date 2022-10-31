package operations



type GetActionOrganizationActivityListQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetActionOrganizationActivityListRequest struct {
    QueryParams GetActionOrganizationActivityListQueryParams 
    
}

type GetActionOrganizationActivityListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

