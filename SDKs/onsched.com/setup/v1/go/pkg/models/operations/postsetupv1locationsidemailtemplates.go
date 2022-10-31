package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1LocationsIDEmailTemplatesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSetupV1LocationsIDEmailTemplatesRequests struct {
    EmailTemplateInputModel map[string]interface{} `request:"mediaType=application/*+json"`
    EmailTemplateInputModel1 map[string]interface{} `request:"mediaType=application/json"`
    EmailTemplateInputModel2 map[string]interface{} `request:"mediaType=application/json-patch+json"`
    EmailTemplateInputModel3 map[string]interface{} `request:"mediaType=text/json"`
    
}

type PostSetupV1LocationsIDEmailTemplatesRequest struct {
    PathParams PostSetupV1LocationsIDEmailTemplatesPathParams 
    Request *PostSetupV1LocationsIDEmailTemplatesRequests 
    
}

type PostSetupV1LocationsIDEmailTemplatesResponse struct {
    ContentResult *shared.ContentResult 
    ContentType string 
    StatusCode int64 
    
}

