package operations

import (
"openapi/pkg/models/shared")

type GetResourcesCampaignsIDJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesCampaignsIDJSONRequest struct {
    PathParams GetResourcesCampaignsIDJSONPathParams 
    
}

type GetResourcesCampaignsIDJSONResponse struct {
    CampaignWrapped *shared.CampaignWrapped 
    ContentType string 
    StatusCode int64 
    
}

