package operations

import (
"openapi/pkg/models/shared")

type GetProgramsRequests struct {
    GetProgramsDto *shared.GetProgramsDto `request:"mediaType=application/*+json"`
    GetProgramsDto1 *shared.GetProgramsDto `request:"mediaType=application/json"`
    GetProgramsDto2 *shared.GetProgramsDto `request:"mediaType=text/json"`
    
}

type GetProgramsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetProgramsRequest struct {
    Request *GetProgramsRequests 
    Security GetProgramsSecurity 
    
}

type GetProgramsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

