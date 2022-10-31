package operations

import (
"openapi/pkg/models/shared")

type GetSubstanceCompositionPathParams struct {
    Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type GetSubstanceCompositionQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    
}

type GetSubstanceCompositionRequest struct {
    PathParams GetSubstanceCompositionPathParams 
    QueryParams GetSubstanceCompositionQueryParams 
    
}

type GetSubstanceCompositionResponse struct {
    ContentType string 
    StatusCode int64 
    SubstanceComposition *shared.SubstanceComposition 
    
}

