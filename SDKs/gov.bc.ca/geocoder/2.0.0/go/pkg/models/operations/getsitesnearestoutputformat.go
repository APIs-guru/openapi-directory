package operations

type GetSitesNearestOutputFormatOutputFormatEnum string

const (
	GetSitesNearestOutputFormatOutputFormatEnumJSON    GetSitesNearestOutputFormatOutputFormatEnum = "json"
	GetSitesNearestOutputFormatOutputFormatEnumGeojson GetSitesNearestOutputFormatOutputFormatEnum = "geojson"
	GetSitesNearestOutputFormatOutputFormatEnumXhtml   GetSitesNearestOutputFormatOutputFormatEnum = "xhtml"
	GetSitesNearestOutputFormatOutputFormatEnumKml     GetSitesNearestOutputFormatOutputFormatEnum = "kml"
	GetSitesNearestOutputFormatOutputFormatEnumGml     GetSitesNearestOutputFormatOutputFormatEnum = "gml"
	GetSitesNearestOutputFormatOutputFormatEnumCsv     GetSitesNearestOutputFormatOutputFormatEnum = "csv"
	GetSitesNearestOutputFormatOutputFormatEnumShpz    GetSitesNearestOutputFormatOutputFormatEnum = "shpz"
)

type GetSitesNearestOutputFormatPathParams struct {
	OutputFormat GetSitesNearestOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetSitesNearestOutputFormatLocationDescriptorEnum string

const (
	GetSitesNearestOutputFormatLocationDescriptorEnumAny            GetSitesNearestOutputFormatLocationDescriptorEnum = "any"
	GetSitesNearestOutputFormatLocationDescriptorEnumAccessPoint    GetSitesNearestOutputFormatLocationDescriptorEnum = "accessPoint"
	GetSitesNearestOutputFormatLocationDescriptorEnumFrontDoorPoint GetSitesNearestOutputFormatLocationDescriptorEnum = "frontDoorPoint"
	GetSitesNearestOutputFormatLocationDescriptorEnumParcelPoint    GetSitesNearestOutputFormatLocationDescriptorEnum = "parcelPoint"
	GetSitesNearestOutputFormatLocationDescriptorEnumRooftopPoint   GetSitesNearestOutputFormatLocationDescriptorEnum = "rooftopPoint"
	GetSitesNearestOutputFormatLocationDescriptorEnumRoutingPoint   GetSitesNearestOutputFormatLocationDescriptorEnum = "routingPoint"
)

type GetSitesNearestOutputFormatQueryParams struct {
	Brief              *bool                                              `queryParam:"style=form,explode=true,name=brief"`
	ExcludeUnits       *bool                                              `queryParam:"style=form,explode=true,name=excludeUnits"`
	LocationDescriptor *GetSitesNearestOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
	MaxDistance        *int64                                             `queryParam:"style=form,explode=true,name=maxDistance"`
	OnlyCivic          *bool                                              `queryParam:"style=form,explode=true,name=onlyCivic"`
	OutputSrs          *int64                                             `queryParam:"style=form,explode=true,name=outputSRS"`
	Point              string                                             `queryParam:"style=form,explode=true,name=point"`
	SetBack            *int64                                             `queryParam:"style=form,explode=true,name=setBack"`
}

type GetSitesNearestOutputFormatRequest struct {
	PathParams  GetSitesNearestOutputFormatPathParams
	QueryParams GetSitesNearestOutputFormatQueryParams
}

type GetSitesNearestOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
