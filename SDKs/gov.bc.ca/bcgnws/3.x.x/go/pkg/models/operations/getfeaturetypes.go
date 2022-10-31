package operations




type GetFeatureTypesOutputFormatEnum string

const (
    GetFeatureTypesOutputFormatEnumJSON GetFeatureTypesOutputFormatEnum = "json"
GetFeatureTypesOutputFormatEnumXML GetFeatureTypesOutputFormatEnum = "xml"
)


type GetFeatureTypesQueryParams struct {
    OutputFormat GetFeatureTypesOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
    
}

type GetFeatureTypesRequest struct {
    QueryParams GetFeatureTypesQueryParams 
    
}

type GetFeatureTypesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

