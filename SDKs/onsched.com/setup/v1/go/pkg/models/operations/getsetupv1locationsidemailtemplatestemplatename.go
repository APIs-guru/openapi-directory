package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1LocationsIDEmailTemplatesTemplateNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
    
}

type GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest struct {
    PathParams GetSetupV1LocationsIDEmailTemplatesTemplateNamePathParams 
    
}

type GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse struct {
    ContentResult *shared.ContentResult 
    ContentType string 
    StatusCode int64 
    
}

