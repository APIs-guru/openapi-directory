package operations

import (
"openapi/pkg/models/shared")

type PostV05HealthInformationOnRequestHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostV05HealthInformationOnRequestRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    HipHealthInformationRequestAcknowledgement *shared.HipHealthInformationRequestAcknowledgement `request:"mediaType=application/json"`
    
}

type PostV05HealthInformationOnRequestRequest struct {
    Headers PostV05HealthInformationOnRequestHeaders 
    Request PostV05HealthInformationOnRequestRequests 
    
}

type PostV05HealthInformationOnRequestResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

