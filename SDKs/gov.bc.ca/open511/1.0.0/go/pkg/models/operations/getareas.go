package operations




type GetAreasFormatEnum string

const (
    GetAreasFormatEnumJSON GetAreasFormatEnum = "json"
GetAreasFormatEnumXML GetAreasFormatEnum = "xml"
)


type GetAreasQueryParams struct {
    Format *GetAreasFormatEnum `queryParam:"style=form,explode=true,name=format"`
    
}

type GetAreasRequest struct {
    QueryParams GetAreasQueryParams 
    
}

type GetAreasResponse struct {
    ContentType string 
    StatusCode int64 
    
}

