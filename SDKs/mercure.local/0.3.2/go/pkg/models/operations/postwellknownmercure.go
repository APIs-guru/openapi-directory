package operations



type PostWellKnownMercureRequest struct {
    Request *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type PostWellKnownMercureResponse struct {
    ContentType string 
    StatusCode int64 
    
}

