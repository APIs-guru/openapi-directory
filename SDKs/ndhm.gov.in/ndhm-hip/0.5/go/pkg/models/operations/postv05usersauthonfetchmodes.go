package operations

import (
"openapi/pkg/models/shared")

type PostV05UsersAuthOnFetchModesHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XHipID string `header:"style=simple,explode=false,name=X-HIP-ID"`
    XHiuID string `header:"style=simple,explode=false,name=X-HIU-ID"`
    
}

type PostV05UsersAuthOnFetchModesRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    PatientAuthModeQueryResponse *shared.PatientAuthModeQueryResponse `request:"mediaType=application/json"`
    
}

type PostV05UsersAuthOnFetchModesRequest struct {
    Headers PostV05UsersAuthOnFetchModesHeaders 
    Request PostV05UsersAuthOnFetchModesRequests 
    
}

type PostV05UsersAuthOnFetchModesResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

