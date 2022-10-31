package operations



type PostModalitiesIDFindStudyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostModalitiesIDFindStudyRequest struct {
    PathParams PostModalitiesIDFindStudyPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostModalitiesIDFindStudyResponse struct {
    ContentType string 
    PostModalitiesIDFindStudy200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

