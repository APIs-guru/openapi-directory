package operations

import (
"openapi/pkg/models/shared")

type PropertyControllerGetPropertiesPhotosPathParams struct {
    PropertyID string `pathParam:"style=simple,explode=false,name=propertyID"`
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type PropertyControllerGetPropertiesPhotosQueryParams struct {
    Count int32 `queryParam:"style=form,explode=true,name=count"`
    Offset int32 `queryParam:"style=form,explode=true,name=offset"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type PropertyControllerGetPropertiesPhotosRequest struct {
    PathParams PropertyControllerGetPropertiesPhotosPathParams 
    QueryParams PropertyControllerGetPropertiesPhotosQueryParams 
    
}

type PropertyControllerGetPropertiesPhotosResponse struct {
    Body []byte 
    ContentType string 
    LandlordPhotoModelResults *shared.LandlordPhotoModelResults 
    StatusCode int64 
    
}

