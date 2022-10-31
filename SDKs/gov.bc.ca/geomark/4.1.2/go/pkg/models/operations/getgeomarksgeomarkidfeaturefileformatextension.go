package operations

type GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum string

const (
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumJSON    GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "json"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumXML     GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "xml"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumKml     GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "kml"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumKmz     GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "kmz"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumShp     GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "shp"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumShpz    GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "shpz"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumGeojson GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "geojson"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumGml     GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "gml"
	GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnumWkt     GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = "wkt"
)

type GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams struct {
	FileFormatExtension GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum `pathParam:"style=simple,explode=false,name=fileFormatExtension"`
	GeomarkID           string                                                                `pathParam:"style=simple,explode=false,name=geomarkId"`
}

type GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams struct {
	Srid *int64 `queryParam:"style=form,explode=true,name=srid"`
}

type GetGeomarksGeomarkIDFeatureFileFormatExtensionRequest struct {
	PathParams  GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams
	QueryParams GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams
}

type GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse struct {
	ContentType string
	StatusCode  int64
}
