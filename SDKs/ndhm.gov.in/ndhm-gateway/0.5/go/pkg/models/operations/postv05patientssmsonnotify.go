package operations

import (
"openapi/pkg/models/shared")

type PostV05PatientsSmsOnNotifyHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XHipID string `header:"style=simple,explode=false,name=X-HIP-ID"`
    
}

type PostV05PatientsSmsOnNotifyRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    PatientSmsNotifcationResponse *shared.PatientSmsNotifcationResponse `request:"mediaType=application/json"`
    
}

type PostV05PatientsSmsOnNotifyRequest struct {
    Headers PostV05PatientsSmsOnNotifyHeaders 
    Request PostV05PatientsSmsOnNotifyRequests 
    
}

type PostV05PatientsSmsOnNotifyResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

