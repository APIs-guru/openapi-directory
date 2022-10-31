package operations

import (
"openapi/pkg/models/shared")

type PostV05HealthInformationCmRequestHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCmID string `header:"style=simple,explode=false,name=X-CM-ID"`
    
}

type PostV05HealthInformationCmRequestRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    HiRequest *shared.HiRequest `request:"mediaType=application/json"`
    
}

type PostV05HealthInformationCmRequestRequest struct {
    Headers PostV05HealthInformationCmRequestHeaders 
    Request PostV05HealthInformationCmRequestRequests 
    
}

type PostV05HealthInformationCmRequestResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

