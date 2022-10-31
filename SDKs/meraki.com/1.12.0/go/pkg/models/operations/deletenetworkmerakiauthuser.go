package operations



type DeleteNetworkMerakiAuthUserPathParams struct {
    MerakiAuthUserID string `pathParam:"style=simple,explode=false,name=merakiAuthUserId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type DeleteNetworkMerakiAuthUserRequest struct {
    PathParams DeleteNetworkMerakiAuthUserPathParams 
    
}

type DeleteNetworkMerakiAuthUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

