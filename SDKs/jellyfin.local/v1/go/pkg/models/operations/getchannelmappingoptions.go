package operations

import (
"openapi/pkg/models/shared")

type GetChannelMappingOptionsQueryParams struct {
    ProviderID *string `queryParam:"style=form,explode=true,name=providerId"`
    
}

type GetChannelMappingOptionsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetChannelMappingOptionsRequest struct {
    QueryParams GetChannelMappingOptionsQueryParams 
    Security GetChannelMappingOptionsSecurity 
    
}

type GetChannelMappingOptionsResponse struct {
    ChannelMappingOptionsDto *shared.ChannelMappingOptionsDto 
    ContentType string 
    StatusCode int64 
    
}

