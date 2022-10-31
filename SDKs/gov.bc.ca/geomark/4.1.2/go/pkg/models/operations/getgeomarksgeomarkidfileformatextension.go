package operations

type GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum string

const (
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumJSON    GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "json"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumXML     GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "xml"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumKml     GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "kml"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumKmz     GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "kmz"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumShp     GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "shp"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumShpz    GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "shpz"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumGeojson GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "geojson"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumGml     GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "gml"
	GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnumWkt     GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = "wkt"
)

type GetGeomarksGeomarkIDFileFormatExtensionPathParams struct {
	FileFormatExtension GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum `pathParam:"style=simple,explode=false,name=fileFormatExtension"`
	GeomarkID           string                                                         `pathParam:"style=simple,explode=false,name=geomarkId"`
}

type GetGeomarksGeomarkIDFileFormatExtensionQueryParams struct {
	Srid *int64 `queryParam:"style=form,explode=true,name=srid"`
}

type GetGeomarksGeomarkIDFileFormatExtensionRequest struct {
	PathParams  GetGeomarksGeomarkIDFileFormatExtensionPathParams
	QueryParams GetGeomarksGeomarkIDFileFormatExtensionQueryParams
}

type GetGeomarksGeomarkIDFileFormatExtensionResponse struct {
	ContentType string
	StatusCode  int64
}
