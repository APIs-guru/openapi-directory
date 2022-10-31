package operations



type DeleteCertificatesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCertificatesIDRequest struct {
    PathParams DeleteCertificatesIDPathParams 
    
}

type DeleteCertificatesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

