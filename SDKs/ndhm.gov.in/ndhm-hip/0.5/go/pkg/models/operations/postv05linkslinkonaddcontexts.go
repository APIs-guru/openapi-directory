package operations

import (
"openapi/pkg/models/shared")
var PostV05LinksLinkOnAddContextsServers = []string{
	"https://your-hrp-server.com",
}

type PostV05LinksLinkOnAddContextsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XHipID string `header:"style=simple,explode=false,name=X-HIP-ID"`
    
}

type PostV05LinksLinkOnAddContextsRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    PatientCareContextLinkResponse *shared.PatientCareContextLinkResponse `request:"mediaType=application/json"`
    
}

type PostV05LinksLinkOnAddContextsRequest struct {
    ServerURL *string 
    Headers PostV05LinksLinkOnAddContextsHeaders 
    Request PostV05LinksLinkOnAddContextsRequests 
    
}

type PostV05LinksLinkOnAddContextsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

