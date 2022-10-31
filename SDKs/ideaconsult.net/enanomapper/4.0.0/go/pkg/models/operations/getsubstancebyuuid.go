package operations

import (
"openapi/pkg/models/shared")

type GetSubstanceByUUIDPathParams struct {
    Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type GetSubstanceByUUIDQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    PropertyUris *string `queryParam:"style=form,explode=true,name=property_uris[]"`
    
}

type GetSubstanceByUUIDRequest struct {
    PathParams GetSubstanceByUUIDPathParams 
    QueryParams GetSubstanceByUUIDQueryParams 
    
}

type GetSubstanceByUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    Substance *shared.Substance 
    
}

