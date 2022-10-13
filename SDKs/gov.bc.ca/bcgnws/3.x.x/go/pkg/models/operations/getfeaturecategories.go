package operations

type GetFeatureCategoriesOutputFormatEnum string

const (
	GetFeatureCategoriesOutputFormatEnumJSON GetFeatureCategoriesOutputFormatEnum = "json"
	GetFeatureCategoriesOutputFormatEnumXML  GetFeatureCategoriesOutputFormatEnum = "xml"
)

type GetFeatureCategoriesQueryParams struct {
	OutputFormat GetFeatureCategoriesOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
}

type GetFeatureCategoriesRequest struct {
	QueryParams GetFeatureCategoriesQueryParams
}

type GetFeatureCategoriesResponse struct {
	ContentType string
	StatusCode  int64
}
