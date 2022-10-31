package operations

import (
"openapi/pkg/models/shared")

type GetEndpointSummaryPathParams struct {
    Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
    
}


type GetEndpointSummaryTopEnum string

const (
    GetEndpointSummaryTopEnumPChem GetEndpointSummaryTopEnum = "P-CHEM"
GetEndpointSummaryTopEnumEcotox GetEndpointSummaryTopEnum = "ECOTOX"
GetEndpointSummaryTopEnumEnvFate GetEndpointSummaryTopEnum = "ENV FATE"
GetEndpointSummaryTopEnumTox GetEndpointSummaryTopEnum = "TOX"
GetEndpointSummaryTopEnumExposure GetEndpointSummaryTopEnum = "EXPOSURE"
)


type GetEndpointSummaryQueryParams struct {
    Category *string `queryParam:"style=form,explode=true,name=category"`
    Top *GetEndpointSummaryTopEnum `queryParam:"style=form,explode=true,name=top"`
    
}

type GetEndpointSummaryRequest struct {
    PathParams GetEndpointSummaryPathParams 
    QueryParams GetEndpointSummaryQueryParams 
    
}

type GetEndpointSummaryResponse struct {
    ContentType string 
    Facet *shared.Facet 
    StatusCode int64 
    
}

