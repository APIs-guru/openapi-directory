package operations

type GetIntersectionsWithinOutputFormatOutputFormatEnum string

const (
	GetIntersectionsWithinOutputFormatOutputFormatEnumJSON    GetIntersectionsWithinOutputFormatOutputFormatEnum = "json"
	GetIntersectionsWithinOutputFormatOutputFormatEnumGeojson GetIntersectionsWithinOutputFormatOutputFormatEnum = "geojson"
	GetIntersectionsWithinOutputFormatOutputFormatEnumXhtml   GetIntersectionsWithinOutputFormatOutputFormatEnum = "xhtml"
	GetIntersectionsWithinOutputFormatOutputFormatEnumKml     GetIntersectionsWithinOutputFormatOutputFormatEnum = "kml"
	GetIntersectionsWithinOutputFormatOutputFormatEnumGml     GetIntersectionsWithinOutputFormatOutputFormatEnum = "gml"
	GetIntersectionsWithinOutputFormatOutputFormatEnumCsv     GetIntersectionsWithinOutputFormatOutputFormatEnum = "csv"
	GetIntersectionsWithinOutputFormatOutputFormatEnumShpz    GetIntersectionsWithinOutputFormatOutputFormatEnum = "shpz"
)

type GetIntersectionsWithinOutputFormatPathParams struct {
	OutputFormat GetIntersectionsWithinOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetIntersectionsWithinOutputFormatQueryParams struct {
	Bbox       string `queryParam:"style=form,explode=true,name=bbox"`
	MaxDegree  *int64 `queryParam:"style=form,explode=true,name=maxDegree"`
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	MinDegree  *int64 `queryParam:"style=form,explode=true,name=minDegree"`
	OutputSrs  *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
}

type GetIntersectionsWithinOutputFormatRequest struct {
	PathParams  GetIntersectionsWithinOutputFormatPathParams
	QueryParams GetIntersectionsWithinOutputFormatQueryParams
}

type GetIntersectionsWithinOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
