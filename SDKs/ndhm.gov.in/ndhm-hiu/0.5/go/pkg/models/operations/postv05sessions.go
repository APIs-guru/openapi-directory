package operations

import (
"openapi/pkg/models/shared")

type PostV05SessionsRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    SessionRequest *shared.SessionRequest `request:"mediaType=application/json"`
    
}

type PostV05SessionsRequest struct {
    Request PostV05SessionsRequests 
    
}

type PostV05SessionsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    SessionResponse *shared.SessionResponse 
    StatusCode int64 
    
}

