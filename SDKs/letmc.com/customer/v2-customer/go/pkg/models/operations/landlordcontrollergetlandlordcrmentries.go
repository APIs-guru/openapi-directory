package operations

import (
"openapi/pkg/models/shared")

type LandlordControllerGetLandlordCrmEntriesPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerGetLandlordCrmEntriesQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerGetLandlordCrmEntriesRequest struct {
    PathParams LandlordControllerGetLandlordCrmEntriesPathParams 
    QueryParams LandlordControllerGetLandlordCrmEntriesQueryParams 
    
}

type LandlordControllerGetLandlordCrmEntriesResponse struct {
    Body []byte 
    ContentType string 
    LandlordCrmEntries []shared.LandlordCrmEntry 
    StatusCode int64 
    
}

