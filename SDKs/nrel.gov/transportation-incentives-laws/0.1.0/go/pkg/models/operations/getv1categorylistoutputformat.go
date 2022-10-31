package operations




type GetV1CategoryListOutputFormatOutputFormatEnum string

const (
    GetV1CategoryListOutputFormatOutputFormatEnumJSON GetV1CategoryListOutputFormatOutputFormatEnum = "json"
GetV1CategoryListOutputFormatOutputFormatEnumXML GetV1CategoryListOutputFormatOutputFormatEnum = "xml"
)


type GetV1CategoryListOutputFormatPathParams struct {
    OutputFormat GetV1CategoryListOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=output_format"`
    
}


type GetV1CategoryListOutputFormatTypeEnum string

const (
    GetV1CategoryListOutputFormatTypeEnumTech GetV1CategoryListOutputFormatTypeEnum = "tech"
GetV1CategoryListOutputFormatTypeEnumUser GetV1CategoryListOutputFormatTypeEnum = "user"
GetV1CategoryListOutputFormatTypeEnumRegulation GetV1CategoryListOutputFormatTypeEnum = "regulation"
GetV1CategoryListOutputFormatTypeEnumIncentive GetV1CategoryListOutputFormatTypeEnum = "incentive"
)


type GetV1CategoryListOutputFormatQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Type *GetV1CategoryListOutputFormatTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetV1CategoryListOutputFormatRequest struct {
    PathParams GetV1CategoryListOutputFormatPathParams 
    QueryParams GetV1CategoryListOutputFormatQueryParams 
    
}

type GetV1CategoryListOutputFormatResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

