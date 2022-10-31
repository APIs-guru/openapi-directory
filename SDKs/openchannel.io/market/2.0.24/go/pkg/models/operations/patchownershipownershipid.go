package operations



type PatchOwnershipOwnershipIDPathParams struct {
    OwnershipID string `pathParam:"style=simple,explode=false,name=ownershipId"`
    
}

type PatchOwnershipOwnershipIDQueryParams struct {
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Expires *int64 `queryParam:"style=form,explode=true,name=expires"`
    
}

type PatchOwnershipOwnershipIDRequest struct {
    PathParams PatchOwnershipOwnershipIDPathParams 
    QueryParams PatchOwnershipOwnershipIDQueryParams 
    
}

type PatchOwnershipOwnershipIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

