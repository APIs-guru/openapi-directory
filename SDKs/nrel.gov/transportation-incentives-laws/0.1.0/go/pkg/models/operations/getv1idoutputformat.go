package operations




type GetV1IDOutputFormatOutputFormatEnum string

const (
    GetV1IDOutputFormatOutputFormatEnumJSON GetV1IDOutputFormatOutputFormatEnum = "json"
GetV1IDOutputFormatOutputFormatEnumXML GetV1IDOutputFormatOutputFormatEnum = "xml"
)


type GetV1IDOutputFormatPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    OutputFormat GetV1IDOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=output_format"`
    
}

type GetV1IDOutputFormatQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Expired *bool `queryParam:"style=form,explode=true,name=expired"`
    Poc *bool `queryParam:"style=form,explode=true,name=poc"`
    
}

type GetV1IDOutputFormatRequest struct {
    PathParams GetV1IDOutputFormatPathParams 
    QueryParams GetV1IDOutputFormatQueryParams 
    
}

type GetV1IDOutputFormatResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

