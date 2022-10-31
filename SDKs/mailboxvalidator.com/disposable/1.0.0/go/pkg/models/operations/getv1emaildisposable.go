package operations




type GetV1EmailDisposableFormatEnum string

const (
    GetV1EmailDisposableFormatEnumJSON GetV1EmailDisposableFormatEnum = "json"
GetV1EmailDisposableFormatEnumXML GetV1EmailDisposableFormatEnum = "xml"
)


type GetV1EmailDisposableQueryParams struct {
    Email string `queryParam:"style=form,explode=true,name=email"`
    Format *GetV1EmailDisposableFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Key string `queryParam:"style=form,explode=true,name=key"`
    
}

type GetV1EmailDisposableRequest struct {
    QueryParams GetV1EmailDisposableQueryParams 
    
}

type GetV1EmailDisposableResponse struct {
    ContentType string 
    GetV1EmailDisposable200ApplicationJSONString *string 
    StatusCode int64 
    
}

