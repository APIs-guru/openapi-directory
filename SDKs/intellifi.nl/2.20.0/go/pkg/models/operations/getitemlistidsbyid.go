package operations



type GetItemListIdsByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetItemListIdsByIDRequest struct {
    PathParams GetItemListIdsByIDPathParams 
    
}

type GetItemListIdsByIDResponse struct {
    ContentType string 
    ListOfItemIds []string 
    StatusCode int64 
    
}

