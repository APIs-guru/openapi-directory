package operations

import (
"openapi/pkg/models/shared")

type GetChannelFeaturesPathParams struct {
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    
}

type GetChannelFeaturesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetChannelFeaturesRequest struct {
    PathParams GetChannelFeaturesPathParams 
    Security GetChannelFeaturesSecurity 
    
}

type GetChannelFeaturesResponse struct {
    ChannelFeatures *shared.ChannelFeatures 
    ContentType string 
    StatusCode int64 
    
}

