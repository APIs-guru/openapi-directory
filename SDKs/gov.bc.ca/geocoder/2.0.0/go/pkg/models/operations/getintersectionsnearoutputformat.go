package operations

type GetIntersectionsNearOutputFormatOutputFormatEnum string

const (
	GetIntersectionsNearOutputFormatOutputFormatEnumJSON    GetIntersectionsNearOutputFormatOutputFormatEnum = "json"
	GetIntersectionsNearOutputFormatOutputFormatEnumGeojson GetIntersectionsNearOutputFormatOutputFormatEnum = "geojson"
	GetIntersectionsNearOutputFormatOutputFormatEnumXhtml   GetIntersectionsNearOutputFormatOutputFormatEnum = "xhtml"
	GetIntersectionsNearOutputFormatOutputFormatEnumKml     GetIntersectionsNearOutputFormatOutputFormatEnum = "kml"
	GetIntersectionsNearOutputFormatOutputFormatEnumGml     GetIntersectionsNearOutputFormatOutputFormatEnum = "gml"
	GetIntersectionsNearOutputFormatOutputFormatEnumCsv     GetIntersectionsNearOutputFormatOutputFormatEnum = "csv"
	GetIntersectionsNearOutputFormatOutputFormatEnumShpz    GetIntersectionsNearOutputFormatOutputFormatEnum = "shpz"
)

type GetIntersectionsNearOutputFormatPathParams struct {
	OutputFormat GetIntersectionsNearOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetIntersectionsNearOutputFormatQueryParams struct {
	MaxDegree   *int64 `queryParam:"style=form,explode=true,name=maxDegree"`
	MaxDistance *int64 `queryParam:"style=form,explode=true,name=maxDistance"`
	MaxResults  *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	MinDegree   *int64 `queryParam:"style=form,explode=true,name=minDegree"`
	OutputSrs   int64  `queryParam:"style=form,explode=true,name=outputSRS"`
	Point       string `queryParam:"style=form,explode=true,name=point"`
}

type GetIntersectionsNearOutputFormatRequest struct {
	PathParams  GetIntersectionsNearOutputFormatPathParams
	QueryParams GetIntersectionsNearOutputFormatQueryParams
}

type GetIntersectionsNearOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
