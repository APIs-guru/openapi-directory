package operations

import (
"openapi/pkg/models/shared")

type PostV05HealthInformationHipRequestHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XHipID string `header:"style=simple,explode=false,name=X-HIP-ID"`
    
}

type PostV05HealthInformationHipRequestRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    HiphiRequest *shared.HiphiRequest `request:"mediaType=application/json"`
    
}

type PostV05HealthInformationHipRequestRequest struct {
    Headers PostV05HealthInformationHipRequestHeaders 
    Request PostV05HealthInformationHipRequestRequests 
    
}

type PostV05HealthInformationHipRequestResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

