package operations



type SetTempPasswordPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type SetTempPasswordQueryParams struct {
    TempPassword *string `queryParam:"style=form,explode=true,name=tempPassword"`
    
}

type SetTempPasswordRequest struct {
    PathParams SetTempPasswordPathParams 
    QueryParams SetTempPasswordQueryParams 
    Request []byte `request:"mediaType=text/plain"`
    
}

type SetTempPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

