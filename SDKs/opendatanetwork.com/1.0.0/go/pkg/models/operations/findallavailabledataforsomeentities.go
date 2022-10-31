package operations



type FindAllAvailableDataForSomeEntitiesQueryParams struct {
    AppToken *string `queryParam:"style=form,explode=true,name=app_token"`
    EntityID string `queryParam:"style=form,explode=true,name=entity_id"`
    
}

type FindAllAvailableDataForSomeEntitiesHeaders struct {
    XAppToken *string `header:"style=simple,explode=false,name=X-App-Token"`
    
}

type FindAllAvailableDataForSomeEntitiesRequest struct {
    QueryParams FindAllAvailableDataForSomeEntitiesQueryParams 
    Headers FindAllAvailableDataForSomeEntitiesHeaders 
    
}

type FindAllAvailableDataForSomeEntitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

