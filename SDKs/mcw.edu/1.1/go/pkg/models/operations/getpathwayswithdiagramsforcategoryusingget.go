package operations



type GetPathwaysWithDiagramsForCategoryUsingGetPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    
}

type GetPathwaysWithDiagramsForCategoryUsingGetRequest struct {
    PathParams GetPathwaysWithDiagramsForCategoryUsingGetPathParams 
    
}

type GetPathwaysWithDiagramsForCategoryUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

