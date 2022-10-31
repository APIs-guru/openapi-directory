package operations

import (
"openapi/pkg/models/shared")

type GetSubstanceStudySummaryPathParams struct {
    Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}


type GetSubstanceStudySummaryTopEnum string

const (
    GetSubstanceStudySummaryTopEnumPChem GetSubstanceStudySummaryTopEnum = "P-CHEM"
GetSubstanceStudySummaryTopEnumEcotox GetSubstanceStudySummaryTopEnum = "ECOTOX"
GetSubstanceStudySummaryTopEnumEnvFate GetSubstanceStudySummaryTopEnum = "ENV FATE"
GetSubstanceStudySummaryTopEnumTox GetSubstanceStudySummaryTopEnum = "TOX"
GetSubstanceStudySummaryTopEnumExposure GetSubstanceStudySummaryTopEnum = "EXPOSURE"
)


type GetSubstanceStudySummaryQueryParams struct {
    Category *string `queryParam:"style=form,explode=true,name=category"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Property *string `queryParam:"style=form,explode=true,name=property"`
    PropertyURI *string `queryParam:"style=form,explode=true,name=property_uri"`
    Result *bool `queryParam:"style=form,explode=true,name=result"`
    Top *GetSubstanceStudySummaryTopEnum `queryParam:"style=form,explode=true,name=top"`
    
}

type GetSubstanceStudySummaryRequest struct {
    PathParams GetSubstanceStudySummaryPathParams 
    QueryParams GetSubstanceStudySummaryQueryParams 
    
}

type GetSubstanceStudySummaryResponse struct {
    ContentType string 
    StatusCode int64 
    SubstanceStudySummary *shared.SubstanceStudySummary 
    
}

