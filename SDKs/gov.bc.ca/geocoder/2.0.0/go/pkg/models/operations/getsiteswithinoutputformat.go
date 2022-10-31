package operations

type GetSitesWithinOutputFormatOutputFormatEnum string

const (
	GetSitesWithinOutputFormatOutputFormatEnumJSON    GetSitesWithinOutputFormatOutputFormatEnum = "json"
	GetSitesWithinOutputFormatOutputFormatEnumGeojson GetSitesWithinOutputFormatOutputFormatEnum = "geojson"
	GetSitesWithinOutputFormatOutputFormatEnumXhtml   GetSitesWithinOutputFormatOutputFormatEnum = "xhtml"
	GetSitesWithinOutputFormatOutputFormatEnumKml     GetSitesWithinOutputFormatOutputFormatEnum = "kml"
	GetSitesWithinOutputFormatOutputFormatEnumGml     GetSitesWithinOutputFormatOutputFormatEnum = "gml"
	GetSitesWithinOutputFormatOutputFormatEnumCsv     GetSitesWithinOutputFormatOutputFormatEnum = "csv"
	GetSitesWithinOutputFormatOutputFormatEnumShpz    GetSitesWithinOutputFormatOutputFormatEnum = "shpz"
)

type GetSitesWithinOutputFormatPathParams struct {
	OutputFormat GetSitesWithinOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetSitesWithinOutputFormatLocationDescriptorEnum string

const (
	GetSitesWithinOutputFormatLocationDescriptorEnumAny            GetSitesWithinOutputFormatLocationDescriptorEnum = "any"
	GetSitesWithinOutputFormatLocationDescriptorEnumAccessPoint    GetSitesWithinOutputFormatLocationDescriptorEnum = "accessPoint"
	GetSitesWithinOutputFormatLocationDescriptorEnumFrontDoorPoint GetSitesWithinOutputFormatLocationDescriptorEnum = "frontDoorPoint"
	GetSitesWithinOutputFormatLocationDescriptorEnumParcelPoint    GetSitesWithinOutputFormatLocationDescriptorEnum = "parcelPoint"
	GetSitesWithinOutputFormatLocationDescriptorEnumRooftopPoint   GetSitesWithinOutputFormatLocationDescriptorEnum = "rooftopPoint"
	GetSitesWithinOutputFormatLocationDescriptorEnumRoutingPoint   GetSitesWithinOutputFormatLocationDescriptorEnum = "routingPoint"
)

type GetSitesWithinOutputFormatQueryParams struct {
	Bbox               string                                            `queryParam:"style=form,explode=true,name=bbox"`
	Brief              *bool                                             `queryParam:"style=form,explode=true,name=brief"`
	ExcludeUnits       *bool                                             `queryParam:"style=form,explode=true,name=excludeUnits"`
	LocationDescriptor *GetSitesWithinOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
	MaxResults         *int64                                            `queryParam:"style=form,explode=true,name=maxResults"`
	OnlyCivic          *bool                                             `queryParam:"style=form,explode=true,name=onlyCivic"`
	OutputSrs          *int64                                            `queryParam:"style=form,explode=true,name=outputSRS"`
	SetBack            *int64                                            `queryParam:"style=form,explode=true,name=setBack"`
}

type GetSitesWithinOutputFormatRequest struct {
	PathParams  GetSitesWithinOutputFormatPathParams
	QueryParams GetSitesWithinOutputFormatQueryParams
}

type GetSitesWithinOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
