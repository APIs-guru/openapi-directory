package operations

import (
"openapi/pkg/models/shared")

type JurisdictionDetailJurisdictionsJurisdictionIDGetPathParams struct {
    JurisdictionID string `pathParam:"style=simple,explode=false,name=jurisdiction_id"`
    
}

type JurisdictionDetailJurisdictionsJurisdictionIDGetQueryParams struct {
    Apikey *string `queryParam:"style=form,explode=true,name=apikey"`
    Include []shared.JurisdictionIncludeEnum `queryParam:"style=form,explode=true,name=include"`
    
}

type JurisdictionDetailJurisdictionsJurisdictionIDGetHeaders struct {
    XAPIKey *string `header:"style=simple,explode=false,name=x-api-key"`
    
}

type JurisdictionDetailJurisdictionsJurisdictionIDGetRequest struct {
    PathParams JurisdictionDetailJurisdictionsJurisdictionIDGetPathParams 
    QueryParams JurisdictionDetailJurisdictionsJurisdictionIDGetQueryParams 
    Headers JurisdictionDetailJurisdictionsJurisdictionIDGetHeaders 
    
}

type JurisdictionDetailJurisdictionsJurisdictionIDGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    Jurisdiction *shared.Jurisdiction 
    StatusCode int64 
    
}

