package operations



type DeleteProductsIDAttachmentsAttachmentIDJSONPathParams struct {
    AttachmentID int32 `pathParam:"style=simple,explode=false,name=attachment_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteProductsIDAttachmentsAttachmentIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteProductsIDAttachmentsAttachmentIDJSONRequest struct {
    PathParams DeleteProductsIDAttachmentsAttachmentIDJSONPathParams 
    QueryParams DeleteProductsIDAttachmentsAttachmentIDJSONQueryParams 
    
}

type DeleteProductsIDAttachmentsAttachmentIDJSONResponse struct {
    ContentType string 
    DeleteProductsIDAttachmentsAttachmentIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

