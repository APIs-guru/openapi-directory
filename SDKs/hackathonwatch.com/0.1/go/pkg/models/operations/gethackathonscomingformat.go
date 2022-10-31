package operations



type GetHackathonsComingFormatQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetHackathonsComingFormatRequest struct {
    QueryParams GetHackathonsComingFormatQueryParams 
    
}

type GetHackathonsComingFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

