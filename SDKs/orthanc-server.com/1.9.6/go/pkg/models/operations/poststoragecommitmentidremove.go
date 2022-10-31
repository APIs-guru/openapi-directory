package operations



type PostStorageCommitmentIDRemovePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostStorageCommitmentIDRemoveRequest struct {
    PathParams PostStorageCommitmentIDRemovePathParams 
    
}

type PostStorageCommitmentIDRemoveResponse struct {
    ContentType string 
    StatusCode int64 
    
}

