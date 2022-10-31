package operations



type PostInventoryAmazonIpiHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostInventoryAmazonIpiRequest struct {
    Headers PostInventoryAmazonIpiHeaders 
    
}

type PostInventoryAmazonIpiResponse struct {
    ContentType string 
    StatusCode int64 
    
}

