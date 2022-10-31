package operations

type GetIntersectionsNearestOutputFormatOutputFormatEnum string

const (
	GetIntersectionsNearestOutputFormatOutputFormatEnumJSON    GetIntersectionsNearestOutputFormatOutputFormatEnum = "json"
	GetIntersectionsNearestOutputFormatOutputFormatEnumGeojson GetIntersectionsNearestOutputFormatOutputFormatEnum = "geojson"
	GetIntersectionsNearestOutputFormatOutputFormatEnumXhtml   GetIntersectionsNearestOutputFormatOutputFormatEnum = "xhtml"
	GetIntersectionsNearestOutputFormatOutputFormatEnumKml     GetIntersectionsNearestOutputFormatOutputFormatEnum = "kml"
	GetIntersectionsNearestOutputFormatOutputFormatEnumGml     GetIntersectionsNearestOutputFormatOutputFormatEnum = "gml"
	GetIntersectionsNearestOutputFormatOutputFormatEnumCsv     GetIntersectionsNearestOutputFormatOutputFormatEnum = "csv"
	GetIntersectionsNearestOutputFormatOutputFormatEnumShpz    GetIntersectionsNearestOutputFormatOutputFormatEnum = "shpz"
)

type GetIntersectionsNearestOutputFormatPathParams struct {
	OutputFormat GetIntersectionsNearestOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetIntersectionsNearestOutputFormatQueryParams struct {
	MaxDegree   *int64 `queryParam:"style=form,explode=true,name=maxDegree"`
	MaxDistance *int64 `queryParam:"style=form,explode=true,name=maxDistance"`
	MinDegree   *int64 `queryParam:"style=form,explode=true,name=minDegree"`
	OutputSrs   *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
	Point       string `queryParam:"style=form,explode=true,name=point"`
}

type GetIntersectionsNearestOutputFormatRequest struct {
	PathParams  GetIntersectionsNearestOutputFormatPathParams
	QueryParams GetIntersectionsNearestOutputFormatQueryParams
}

type GetIntersectionsNearestOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
