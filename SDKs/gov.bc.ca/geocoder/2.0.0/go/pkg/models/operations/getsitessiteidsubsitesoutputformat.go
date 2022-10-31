package operations




type GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum string

const (
    GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumJSON GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "json"
GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumGeojson GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "geojson"
GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumXhtml GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "xhtml"
GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumKml GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "kml"
GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumGml GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "gml"
GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumCsv GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "csv"
GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumShpz GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = "shpz"
)


type GetSitesSiteIDSubsitesOutputFormatPathParams struct {
    OutputFormat GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    SiteID string `pathParam:"style=simple,explode=false,name=siteID"`
    
}


type GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum string

const (
    GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumAny GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum = "any"
GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumAccessPoint GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum = "accessPoint"
GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumFrontDoorPoint GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum = "frontDoorPoint"
GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumParcelPoint GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum = "parcelPoint"
GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumRooftopPoint GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum = "rooftopPoint"
GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumRoutingPoint GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum = "routingPoint"
)


type GetSitesSiteIDSubsitesOutputFormatQueryParams struct {
    Brief *bool `queryParam:"style=form,explode=true,name=brief"`
    LocationDescriptor *GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    SetBack *int64 `queryParam:"style=form,explode=true,name=setBack"`
    
}

type GetSitesSiteIDSubsitesOutputFormatRequest struct {
    PathParams GetSitesSiteIDSubsitesOutputFormatPathParams 
    QueryParams GetSitesSiteIDSubsitesOutputFormatQueryParams 
    
}

type GetSitesSiteIDSubsitesOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

