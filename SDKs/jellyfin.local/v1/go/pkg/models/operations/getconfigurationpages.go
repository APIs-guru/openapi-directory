package operations

import (
"openapi/pkg/models/shared")

type GetConfigurationPagesQueryParams struct {
    EnableInMainMenu *bool `queryParam:"style=form,explode=true,name=enableInMainMenu"`
    PageType *shared.ConfigurationPageTypeEnum `queryParam:"style=form,explode=true,name=pageType"`
    
}

type GetConfigurationPagesRequest struct {
    QueryParams GetConfigurationPagesQueryParams 
    
}

type GetConfigurationPagesResponse struct {
    ConfigurationPageInfos []shared.ConfigurationPageInfo 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

