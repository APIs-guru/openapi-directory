package operations

type PostGeomarksNewRequestBodyBufferCapEnum string

const (
	PostGeomarksNewRequestBodyBufferCapEnumRound  PostGeomarksNewRequestBodyBufferCapEnum = "ROUND"
	PostGeomarksNewRequestBodyBufferCapEnumSquare PostGeomarksNewRequestBodyBufferCapEnum = "SQUARE"
	PostGeomarksNewRequestBodyBufferCapEnumFlat   PostGeomarksNewRequestBodyBufferCapEnum = "FLAT"
)

type PostGeomarksNewRequestBodyBufferJoinEnum string

const (
	PostGeomarksNewRequestBodyBufferJoinEnumRound PostGeomarksNewRequestBodyBufferJoinEnum = "ROUND"
	PostGeomarksNewRequestBodyBufferJoinEnumMitre PostGeomarksNewRequestBodyBufferJoinEnum = "MITRE"
	PostGeomarksNewRequestBodyBufferJoinEnumBevel PostGeomarksNewRequestBodyBufferJoinEnum = "BEVEL"
)

type PostGeomarksNewRequestBodyFormatEnum string

const (
	PostGeomarksNewRequestBodyFormatEnumJSON    PostGeomarksNewRequestBodyFormatEnum = "json"
	PostGeomarksNewRequestBodyFormatEnumXML     PostGeomarksNewRequestBodyFormatEnum = "xml"
	PostGeomarksNewRequestBodyFormatEnumKml     PostGeomarksNewRequestBodyFormatEnum = "kml"
	PostGeomarksNewRequestBodyFormatEnumKmz     PostGeomarksNewRequestBodyFormatEnum = "kmz"
	PostGeomarksNewRequestBodyFormatEnumShp     PostGeomarksNewRequestBodyFormatEnum = "shp"
	PostGeomarksNewRequestBodyFormatEnumShpz    PostGeomarksNewRequestBodyFormatEnum = "shpz"
	PostGeomarksNewRequestBodyFormatEnumGeojson PostGeomarksNewRequestBodyFormatEnum = "geojson"
	PostGeomarksNewRequestBodyFormatEnumGml     PostGeomarksNewRequestBodyFormatEnum = "gml"
	PostGeomarksNewRequestBodyFormatEnumWkt     PostGeomarksNewRequestBodyFormatEnum = "wkt"
)

type PostGeomarksNewRequestBodyResultFormatEnum string

const (
	PostGeomarksNewRequestBodyResultFormatEnumJSON    PostGeomarksNewRequestBodyResultFormatEnum = "json"
	PostGeomarksNewRequestBodyResultFormatEnumXML     PostGeomarksNewRequestBodyResultFormatEnum = "xml"
	PostGeomarksNewRequestBodyResultFormatEnumKml     PostGeomarksNewRequestBodyResultFormatEnum = "kml"
	PostGeomarksNewRequestBodyResultFormatEnumKmz     PostGeomarksNewRequestBodyResultFormatEnum = "kmz"
	PostGeomarksNewRequestBodyResultFormatEnumShp     PostGeomarksNewRequestBodyResultFormatEnum = "shp"
	PostGeomarksNewRequestBodyResultFormatEnumShpz    PostGeomarksNewRequestBodyResultFormatEnum = "shpz"
	PostGeomarksNewRequestBodyResultFormatEnumGeojson PostGeomarksNewRequestBodyResultFormatEnum = "geojson"
	PostGeomarksNewRequestBodyResultFormatEnumGml     PostGeomarksNewRequestBodyResultFormatEnum = "gml"
	PostGeomarksNewRequestBodyResultFormatEnumWkt     PostGeomarksNewRequestBodyResultFormatEnum = "wkt"
)

type PostGeomarksNewRequestBody struct {
	AllowOverlap       *bool                                       `form:"name=allowOverlap"`
	Body               *string                                     `form:"name=body"`
	BufferCap          *PostGeomarksNewRequestBodyBufferCapEnum    `form:"name=bufferCap"`
	BufferJoin         *PostGeomarksNewRequestBodyBufferJoinEnum   `form:"name=bufferJoin"`
	BufferMetres       *int64                                      `form:"name=bufferMetres"`
	BufferMitreLimit   *int64                                      `form:"name=bufferMitreLimit"`
	BufferSegments     *int64                                      `form:"name=bufferSegments"`
	Callback           *string                                     `form:"name=callback"`
	FailureRedirectURL *string                                     `form:"name=failureRedirectUrl"`
	Format             *PostGeomarksNewRequestBodyFormatEnum       `form:"name=format"`
	Multiple           *bool                                       `form:"name=multiple"`
	RedirectURL        *string                                     `form:"name=redirectUrl"`
	ResultFormat       *PostGeomarksNewRequestBodyResultFormatEnum `form:"name=resultFormat"`
	Srid               *int64                                      `form:"name=srid"`
}

type PostGeomarksNewRequest struct {
	Request *PostGeomarksNewRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PostGeomarksNewResponse struct {
	ContentType string
	StatusCode  int64
}
