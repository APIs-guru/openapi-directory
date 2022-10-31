package operations



type PostModalitiesIDStorageCommitmentPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostModalitiesIDStorageCommitmentRequest struct {
    PathParams PostModalitiesIDStorageCommitmentPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostModalitiesIDStorageCommitmentResponse struct {
    ContentType string 
    PostModalitiesIDStorageCommitment200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

