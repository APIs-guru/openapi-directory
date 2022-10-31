package operations




type GetNameAuthoritiesOutputFormatEnum string

const (
    GetNameAuthoritiesOutputFormatEnumJSON GetNameAuthoritiesOutputFormatEnum = "json"
GetNameAuthoritiesOutputFormatEnumXML GetNameAuthoritiesOutputFormatEnum = "xml"
)


type GetNameAuthoritiesQueryParams struct {
    OutputFormat GetNameAuthoritiesOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
    
}

type GetNameAuthoritiesRequest struct {
    QueryParams GetNameAuthoritiesQueryParams 
    
}

type GetNameAuthoritiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

