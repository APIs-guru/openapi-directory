package operations

import (
"openapi/pkg/models/shared")

type GetResourcesCampaignsJSONQueryParams struct {
    Max *int32 `queryParam:"style=form,explode=false,name=max"`
    Offset *int32 `queryParam:"style=form,explode=false,name=offset"`
    Sort *string `queryParam:"style=form,explode=false,name=sort"`
    
}

type GetResourcesCampaignsJSONRequest struct {
    QueryParams GetResourcesCampaignsJSONQueryParams 
    
}

type GetResourcesCampaignsJSONResponse struct {
    CampaignWrapped *shared.CampaignWrapped 
    ContentType string 
    StatusCode int64 
    
}

