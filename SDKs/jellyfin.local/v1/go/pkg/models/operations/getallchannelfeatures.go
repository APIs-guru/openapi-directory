package operations

import (
"openapi/pkg/models/shared")

type GetAllChannelFeaturesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAllChannelFeaturesRequest struct {
    Security GetAllChannelFeaturesSecurity 
    
}

type GetAllChannelFeaturesResponse struct {
    ChannelFeatures []shared.ChannelFeatures 
    ContentType string 
    StatusCode int64 
    
}

