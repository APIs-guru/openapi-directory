package operations

type GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum string

const (
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumJSON    GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "json"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumXML     GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "xml"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumKml     GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "kml"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumKmz     GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "kmz"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumShp     GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "shp"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumShpz    GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "shpz"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumGeojson GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "geojson"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumGml     GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "gml"
	GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnumWkt     GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = "wkt"
)

type GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams struct {
	FileFormatExtension GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum `pathParam:"style=simple,explode=false,name=fileFormatExtension"`
	GeomarkID           string                                                              `pathParam:"style=simple,explode=false,name=geomarkId"`
}

type GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams struct {
	Srid *int64 `queryParam:"style=form,explode=true,name=srid"`
}

type GetGeomarksGeomarkIDPartsFileFormatExtensionRequest struct {
	PathParams  GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams
	QueryParams GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams
}

type GetGeomarksGeomarkIDPartsFileFormatExtensionResponse struct {
	ContentType string
	StatusCode  int64
}
