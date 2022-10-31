package operations



type LearnablePathParams struct {
    Learnable bool `pathParam:"style=simple,explode=false,name=learnable"`
    Source string `pathParam:"style=simple,explode=false,name=source"`
    
}

type LearnableRequest struct {
    PathParams LearnablePathParams 
    
}

type LearnableResponse struct {
    ContentType string 
    StatusCode int64 
    
}

