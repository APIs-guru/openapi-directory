package operations



type GetStatsTotalQueryParams struct {
    End *int64 `queryParam:"style=form,explode=true,name=end"`
    Fields string `queryParam:"style=form,explode=true,name=fields"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetStatsTotalRequest struct {
    QueryParams GetStatsTotalQueryParams 
    
}

type GetStatsTotalResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

