package operations



type ForgotPasswordOneTimeCodePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ForgotPasswordOneTimeCodeQueryParams struct {
    SendEmail *string `queryParam:"style=form,explode=true,name=sendEmail"`
    
}

type ForgotPasswordOneTimeCodeRequest struct {
    PathParams ForgotPasswordOneTimeCodePathParams 
    QueryParams ForgotPasswordOneTimeCodeQueryParams 
    Request []byte `request:"mediaType=text/plain"`
    
}

type ForgotPasswordOneTimeCodeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

