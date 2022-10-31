package operations



type GetStorageCommitmentIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStorageCommitmentIDRequest struct {
    PathParams GetStorageCommitmentIDPathParams 
    
}

type GetStorageCommitmentIDResponse struct {
    ContentType string 
    GetStorageCommitmentID200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

