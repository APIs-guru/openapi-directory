package operations

type GetSitesSiteIDOutputFormatOutputFormatEnum string

const (
	GetSitesSiteIDOutputFormatOutputFormatEnumJSON    GetSitesSiteIDOutputFormatOutputFormatEnum = "json"
	GetSitesSiteIDOutputFormatOutputFormatEnumGeojson GetSitesSiteIDOutputFormatOutputFormatEnum = "geojson"
	GetSitesSiteIDOutputFormatOutputFormatEnumXhtml   GetSitesSiteIDOutputFormatOutputFormatEnum = "xhtml"
	GetSitesSiteIDOutputFormatOutputFormatEnumKml     GetSitesSiteIDOutputFormatOutputFormatEnum = "kml"
	GetSitesSiteIDOutputFormatOutputFormatEnumGml     GetSitesSiteIDOutputFormatOutputFormatEnum = "gml"
	GetSitesSiteIDOutputFormatOutputFormatEnumCsv     GetSitesSiteIDOutputFormatOutputFormatEnum = "csv"
	GetSitesSiteIDOutputFormatOutputFormatEnumShpz    GetSitesSiteIDOutputFormatOutputFormatEnum = "shpz"
)

type GetSitesSiteIDOutputFormatPathParams struct {
	OutputFormat GetSitesSiteIDOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
	SiteID       string                                     `pathParam:"style=simple,explode=false,name=siteID"`
}

type GetSitesSiteIDOutputFormatLocationDescriptorEnum string

const (
	GetSitesSiteIDOutputFormatLocationDescriptorEnumAny            GetSitesSiteIDOutputFormatLocationDescriptorEnum = "any"
	GetSitesSiteIDOutputFormatLocationDescriptorEnumAccessPoint    GetSitesSiteIDOutputFormatLocationDescriptorEnum = "accessPoint"
	GetSitesSiteIDOutputFormatLocationDescriptorEnumFrontDoorPoint GetSitesSiteIDOutputFormatLocationDescriptorEnum = "frontDoorPoint"
	GetSitesSiteIDOutputFormatLocationDescriptorEnumParcelPoint    GetSitesSiteIDOutputFormatLocationDescriptorEnum = "parcelPoint"
	GetSitesSiteIDOutputFormatLocationDescriptorEnumRooftopPoint   GetSitesSiteIDOutputFormatLocationDescriptorEnum = "rooftopPoint"
	GetSitesSiteIDOutputFormatLocationDescriptorEnumRoutingPoint   GetSitesSiteIDOutputFormatLocationDescriptorEnum = "routingPoint"
)

type GetSitesSiteIDOutputFormatQueryParams struct {
	Brief              *bool                                             `queryParam:"style=form,explode=true,name=brief"`
	LocationDescriptor *GetSitesSiteIDOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
	OutputSrs          *int64                                            `queryParam:"style=form,explode=true,name=outputSRS"`
	SetBack            *int64                                            `queryParam:"style=form,explode=true,name=setBack"`
}

type GetSitesSiteIDOutputFormatRequest struct {
	PathParams  GetSitesSiteIDOutputFormatPathParams
	QueryParams GetSitesSiteIDOutputFormatQueryParams
}

type GetSitesSiteIDOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
