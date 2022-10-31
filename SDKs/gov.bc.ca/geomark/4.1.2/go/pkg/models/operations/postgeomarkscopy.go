package operations

type PostGeomarksCopyBufferCapEnum string

const (
	PostGeomarksCopyBufferCapEnumRound  PostGeomarksCopyBufferCapEnum = "ROUND"
	PostGeomarksCopyBufferCapEnumSquare PostGeomarksCopyBufferCapEnum = "SQUARE"
	PostGeomarksCopyBufferCapEnumFlat   PostGeomarksCopyBufferCapEnum = "FLAT"
)

type PostGeomarksCopyBufferJoinEnum string

const (
	PostGeomarksCopyBufferJoinEnumRound PostGeomarksCopyBufferJoinEnum = "ROUND"
	PostGeomarksCopyBufferJoinEnumMitre PostGeomarksCopyBufferJoinEnum = "MITRE"
	PostGeomarksCopyBufferJoinEnumBevel PostGeomarksCopyBufferJoinEnum = "BEVEL"
)

type PostGeomarksCopyResultFormatEnum string

const (
	PostGeomarksCopyResultFormatEnumJSON    PostGeomarksCopyResultFormatEnum = "json"
	PostGeomarksCopyResultFormatEnumXML     PostGeomarksCopyResultFormatEnum = "xml"
	PostGeomarksCopyResultFormatEnumKml     PostGeomarksCopyResultFormatEnum = "kml"
	PostGeomarksCopyResultFormatEnumKmz     PostGeomarksCopyResultFormatEnum = "kmz"
	PostGeomarksCopyResultFormatEnumShp     PostGeomarksCopyResultFormatEnum = "shp"
	PostGeomarksCopyResultFormatEnumShpz    PostGeomarksCopyResultFormatEnum = "shpz"
	PostGeomarksCopyResultFormatEnumGeojson PostGeomarksCopyResultFormatEnum = "geojson"
	PostGeomarksCopyResultFormatEnumGml     PostGeomarksCopyResultFormatEnum = "gml"
	PostGeomarksCopyResultFormatEnumWkt     PostGeomarksCopyResultFormatEnum = "wkt"
)

type PostGeomarksCopyQueryParams struct {
	AllowOverlap       *bool                             `queryParam:"style=form,explode=true,name=allowOverlap"`
	BufferCap          *PostGeomarksCopyBufferCapEnum    `queryParam:"style=form,explode=true,name=bufferCap"`
	BufferJoin         *PostGeomarksCopyBufferJoinEnum   `queryParam:"style=form,explode=true,name=bufferJoin"`
	BufferMetres       *int64                            `queryParam:"style=form,explode=true,name=bufferMetres"`
	BufferMitreLimit   *int64                            `queryParam:"style=form,explode=true,name=bufferMitreLimit"`
	BufferSegments     *int64                            `queryParam:"style=form,explode=true,name=bufferSegments"`
	Callback           *string                           `queryParam:"style=form,explode=true,name=callback"`
	FailureRedirectURL *string                           `queryParam:"style=form,explode=true,name=failureRedirectUrl"`
	GeomarkURL         string                            `queryParam:"style=form,explode=true,name=geomarkUrl"`
	RedirectURL        *string                           `queryParam:"style=form,explode=true,name=redirectUrl"`
	ResultFormat       *PostGeomarksCopyResultFormatEnum `queryParam:"style=form,explode=true,name=resultFormat"`
}

type PostGeomarksCopyRequest struct {
	QueryParams PostGeomarksCopyQueryParams
}

type PostGeomarksCopyResponse struct {
	ContentType string
	StatusCode  int64
}
