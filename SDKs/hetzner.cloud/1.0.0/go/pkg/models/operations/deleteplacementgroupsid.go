package operations



type DeletePlacementGroupsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePlacementGroupsIDRequest struct {
    PathParams DeletePlacementGroupsIDPathParams 
    
}

type DeletePlacementGroupsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

