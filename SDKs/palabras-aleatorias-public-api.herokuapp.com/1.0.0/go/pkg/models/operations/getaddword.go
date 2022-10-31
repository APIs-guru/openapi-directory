package operations



type GetAddWordQueryParams struct {
    Author *string `queryParam:"style=form,explode=true,name=author"`
    Definition *string `queryParam:"style=form,explode=true,name=definition"`
    Related *string `queryParam:"style=form,explode=true,name=related"`
    Word *string `queryParam:"style=form,explode=true,name=word"`
    
}

type GetAddWordRequest struct {
    QueryParams GetAddWordQueryParams 
    
}

type GetAddWordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

