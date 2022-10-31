package operations



type PostOwnershipOwnershipIDPathParams struct {
    OwnershipID string `pathParam:"style=simple,explode=false,name=ownershipId"`
    
}

type PostOwnershipOwnershipIDQueryParams struct {
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Expires *int64 `queryParam:"style=form,explode=true,name=expires"`
    
}

type PostOwnershipOwnershipIDRequest struct {
    PathParams PostOwnershipOwnershipIDPathParams 
    QueryParams PostOwnershipOwnershipIDQueryParams 
    
}

type PostOwnershipOwnershipIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

