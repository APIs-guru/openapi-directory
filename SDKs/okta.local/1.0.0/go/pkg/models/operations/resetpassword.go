package operations



type ResetPasswordPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ResetPasswordQueryParams struct {
    SendEmail *string `queryParam:"style=form,explode=true,name=sendEmail"`
    
}

type ResetPasswordRequest struct {
    PathParams ResetPasswordPathParams 
    QueryParams ResetPasswordQueryParams 
    Request []byte `request:"mediaType=text/plain"`
    
}

type ResetPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

