package operations

type GetSitesNearOutputFormatOutputFormatEnum string

const (
	GetSitesNearOutputFormatOutputFormatEnumJSON    GetSitesNearOutputFormatOutputFormatEnum = "json"
	GetSitesNearOutputFormatOutputFormatEnumGeojson GetSitesNearOutputFormatOutputFormatEnum = "geojson"
	GetSitesNearOutputFormatOutputFormatEnumXhtml   GetSitesNearOutputFormatOutputFormatEnum = "xhtml"
	GetSitesNearOutputFormatOutputFormatEnumKml     GetSitesNearOutputFormatOutputFormatEnum = "kml"
	GetSitesNearOutputFormatOutputFormatEnumGml     GetSitesNearOutputFormatOutputFormatEnum = "gml"
	GetSitesNearOutputFormatOutputFormatEnumCsv     GetSitesNearOutputFormatOutputFormatEnum = "csv"
	GetSitesNearOutputFormatOutputFormatEnumShpz    GetSitesNearOutputFormatOutputFormatEnum = "shpz"
)

type GetSitesNearOutputFormatPathParams struct {
	OutputFormat GetSitesNearOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetSitesNearOutputFormatLocationDescriptorEnum string

const (
	GetSitesNearOutputFormatLocationDescriptorEnumAny            GetSitesNearOutputFormatLocationDescriptorEnum = "any"
	GetSitesNearOutputFormatLocationDescriptorEnumAccessPoint    GetSitesNearOutputFormatLocationDescriptorEnum = "accessPoint"
	GetSitesNearOutputFormatLocationDescriptorEnumFrontDoorPoint GetSitesNearOutputFormatLocationDescriptorEnum = "frontDoorPoint"
	GetSitesNearOutputFormatLocationDescriptorEnumParcelPoint    GetSitesNearOutputFormatLocationDescriptorEnum = "parcelPoint"
	GetSitesNearOutputFormatLocationDescriptorEnumRooftopPoint   GetSitesNearOutputFormatLocationDescriptorEnum = "rooftopPoint"
	GetSitesNearOutputFormatLocationDescriptorEnumRoutingPoint   GetSitesNearOutputFormatLocationDescriptorEnum = "routingPoint"
)

type GetSitesNearOutputFormatQueryParams struct {
	Brief              *bool                                           `queryParam:"style=form,explode=true,name=brief"`
	ExcludeUnits       *bool                                           `queryParam:"style=form,explode=true,name=excludeUnits"`
	LocationDescriptor *GetSitesNearOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
	MaxDistance        *int64                                          `queryParam:"style=form,explode=true,name=maxDistance"`
	MaxResults         *int64                                          `queryParam:"style=form,explode=true,name=maxResults"`
	OnlyCivic          *bool                                           `queryParam:"style=form,explode=true,name=onlyCivic"`
	OutputSrs          *int64                                          `queryParam:"style=form,explode=true,name=outputSRS"`
	Point              string                                          `queryParam:"style=form,explode=true,name=point"`
	SetBack            *int64                                          `queryParam:"style=form,explode=true,name=setBack"`
}

type GetSitesNearOutputFormatRequest struct {
	PathParams  GetSitesNearOutputFormatPathParams
	QueryParams GetSitesNearOutputFormatQueryParams
}

type GetSitesNearOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
