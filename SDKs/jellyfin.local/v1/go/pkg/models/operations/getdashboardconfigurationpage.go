package operations



type GetDashboardConfigurationPageQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type GetDashboardConfigurationPageRequest struct {
    QueryParams GetDashboardConfigurationPageQueryParams 
    
}

type GetDashboardConfigurationPageResponse struct {
    ContentType string 
    GetDashboardConfigurationPage200ApplicationXJavascriptBinaryString []byte 
    GetDashboardConfigurationPage200TextHTMLBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

