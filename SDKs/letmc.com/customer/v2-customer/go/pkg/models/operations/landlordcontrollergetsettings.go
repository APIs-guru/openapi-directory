package operations

import (
"openapi/pkg/models/shared")

type LandlordControllerGetSettingsPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerGetSettingsQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerGetSettingsRequest struct {
    PathParams LandlordControllerGetSettingsPathParams 
    QueryParams LandlordControllerGetSettingsQueryParams 
    
}

type LandlordControllerGetSettingsResponse struct {
    ContentType string 
    LandlordSettingsModel *shared.LandlordSettingsModel 
    StatusCode int64 
    
}

