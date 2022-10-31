package operations

import (
"openapi/pkg/models/shared")

type LandlordControllerGetRentArrearsPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerGetRentArrearsQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerGetRentArrearsRequest struct {
    PathParams LandlordControllerGetRentArrearsPathParams 
    QueryParams LandlordControllerGetRentArrearsQueryParams 
    
}

type LandlordControllerGetRentArrearsResponse struct {
    ContentType string 
    LandlordRentArrearsModel *shared.LandlordRentArrearsModel 
    StatusCode int64 
    
}

