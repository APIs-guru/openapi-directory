package operations



type LandlordControllerGetDocumentPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerGetDocumentQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=ID"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerGetDocumentRequest struct {
    PathParams LandlordControllerGetDocumentPathParams 
    QueryParams LandlordControllerGetDocumentQueryParams 
    
}

type LandlordControllerGetDocumentResponse struct {
    Body []byte 
    ContentType string 
    Object map[string]interface{} 
    StatusCode int64 
    
}

