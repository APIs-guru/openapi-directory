package operations

type GetFeatureClassesOutputFormatEnum string

const (
	GetFeatureClassesOutputFormatEnumJSON GetFeatureClassesOutputFormatEnum = "json"
	GetFeatureClassesOutputFormatEnumXML  GetFeatureClassesOutputFormatEnum = "xml"
)

type GetFeatureClassesQueryParams struct {
	OutputFormat GetFeatureClassesOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
}

type GetFeatureClassesRequest struct {
	QueryParams GetFeatureClassesQueryParams
}

type GetFeatureClassesResponse struct {
	ContentType string
	StatusCode  int64
}
