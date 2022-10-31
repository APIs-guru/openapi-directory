package operations

type GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum string

const (
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumJSON    GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "json"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumXML     GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "xml"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumKml     GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "kml"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumKmz     GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "kmz"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumShp     GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "shp"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumShpz    GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "shpz"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumGeojson GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "geojson"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumGml     GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "gml"
	GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnumWkt     GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = "wkt"
)

type GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams struct {
	FileFormatExtension GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum `pathParam:"style=simple,explode=false,name=fileFormatExtension"`
	GeomarkID           string                                                                    `pathParam:"style=simple,explode=false,name=geomarkId"`
}

type GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams struct {
	Srid *int64 `queryParam:"style=form,explode=true,name=srid"`
}

type GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest struct {
	PathParams  GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams
	QueryParams GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams
}

type GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse struct {
	ContentType string
	StatusCode  int64
}
