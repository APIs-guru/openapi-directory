package operations

import (
"openapi/pkg/models/shared")

type PostV05UsersAuthInitHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostV05UsersAuthInitRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    PatientAuthInitRequest *shared.PatientAuthInitRequest `request:"mediaType=application/json"`
    
}

type PostV05UsersAuthInitRequest struct {
    Headers PostV05UsersAuthInitHeaders 
    Request PostV05UsersAuthInitRequests 
    
}

type PostV05UsersAuthInitResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

