package operations

import (
"openapi/pkg/models/shared")

type GetVVersionSitesSiteIdsPathParams struct {
    SiteIds string `pathParam:"style=simple,explode=false,name=site_Ids"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetVVersionSitesSiteIdsRequest struct {
    PathParams GetVVersionSitesSiteIdsPathParams 
    
}

type GetVVersionSitesSiteIdsResponse struct {
    ContentType string 
    SiteResponse *shared.SiteResponse 
    StatusCode int64 
    
}

