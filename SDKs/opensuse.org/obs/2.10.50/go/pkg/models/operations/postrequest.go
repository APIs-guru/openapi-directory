package operations

import (
"openapi/pkg/models/shared")


type PostRequestAddrevisionEnum string

const (
    PostRequestAddrevisionEnumOne PostRequestAddrevisionEnum = "1"
)



type PostRequestCmdEnum string

const (
    PostRequestCmdEnumCreate PostRequestCmdEnum = "create"
)



type PostRequestIgnoreBuildStateEnum string

const (
    PostRequestIgnoreBuildStateEnumOne PostRequestIgnoreBuildStateEnum = "1"
)



type PostRequestIgnoreDelegateEnum string

const (
    PostRequestIgnoreDelegateEnumOne PostRequestIgnoreDelegateEnum = "1"
)


type PostRequestQueryParams struct {
    Addrevision *PostRequestAddrevisionEnum `queryParam:"style=form,explode=true,name=addrevision"`
    Cmd PostRequestCmdEnum `queryParam:"style=form,explode=true,name=cmd"`
    IgnoreBuildState *PostRequestIgnoreBuildStateEnum `queryParam:"style=form,explode=true,name=ignore_build_state"`
    IgnoreDelegate *PostRequestIgnoreDelegateEnum `queryParam:"style=form,explode=true,name=ignore_delegate"`
    
}

type PostRequestSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PostRequestRequest struct {
    QueryParams PostRequestQueryParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PostRequestSecurity 
    
}

type PostRequestResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

