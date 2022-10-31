package operations



type GetActionOrganizationActivityListHTMLQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetActionOrganizationActivityListHTMLRequest struct {
    QueryParams GetActionOrganizationActivityListHTMLQueryParams 
    
}

type GetActionOrganizationActivityListHTMLResponse struct {
    ContentType string 
    StatusCode int64 
    
}

