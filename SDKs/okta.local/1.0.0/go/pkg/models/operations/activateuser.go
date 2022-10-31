package operations



type ActivateUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ActivateUserQueryParams struct {
    SendEmail *string `queryParam:"style=form,explode=true,name=sendEmail"`
    
}

type ActivateUserRequest struct {
    PathParams ActivateUserPathParams 
    QueryParams ActivateUserQueryParams 
    Request []byte `request:"mediaType=text/plain"`
    
}

type ActivateUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

