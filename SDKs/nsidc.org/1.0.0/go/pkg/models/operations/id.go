package operations




type IDSourceEnum string

const (
    IDSourceEnumNsidc IDSourceEnum = "NSIDC"
IDSourceEnumAde IDSourceEnum = "ADE"
)


type IDQueryParams struct {
    Q string `queryParam:"style=form,explode=true,name=q"`
    Source IDSourceEnum `queryParam:"style=form,explode=true,name=source"`
    
}

type IDRequest struct {
    QueryParams IDQueryParams 
    
}

type IDResponse struct {
    ContentType string 
    StatusCode int64 
    ID200ApplicationXSuggestionsPlusJSONString *string 
    
}

