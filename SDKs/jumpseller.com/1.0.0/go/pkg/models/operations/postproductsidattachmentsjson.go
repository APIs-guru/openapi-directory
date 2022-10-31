package operations

import (
"openapi/pkg/models/shared")

type PostProductsIDAttachmentsJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostProductsIDAttachmentsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PostProductsIDAttachmentsJSONRequest struct {
    PathParams PostProductsIDAttachmentsJSONPathParams 
    QueryParams PostProductsIDAttachmentsJSONQueryParams 
    Request shared.AttachmentEdit `request:"mediaType=application/json"`
    
}

type PostProductsIDAttachmentsJSONResponse struct {
    Attachment *shared.Attachment 
    ContentType string 
    StatusCode int64 
    
}

