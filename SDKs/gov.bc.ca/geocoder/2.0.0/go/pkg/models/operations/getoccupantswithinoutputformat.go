package operations




type GetOccupantsWithinOutputFormatOutputFormatEnum string

const (
    GetOccupantsWithinOutputFormatOutputFormatEnumJSON GetOccupantsWithinOutputFormatOutputFormatEnum = "json"
GetOccupantsWithinOutputFormatOutputFormatEnumGeojson GetOccupantsWithinOutputFormatOutputFormatEnum = "geojson"
GetOccupantsWithinOutputFormatOutputFormatEnumXhtml GetOccupantsWithinOutputFormatOutputFormatEnum = "xhtml"
GetOccupantsWithinOutputFormatOutputFormatEnumKml GetOccupantsWithinOutputFormatOutputFormatEnum = "kml"
GetOccupantsWithinOutputFormatOutputFormatEnumGml GetOccupantsWithinOutputFormatOutputFormatEnum = "gml"
GetOccupantsWithinOutputFormatOutputFormatEnumCsv GetOccupantsWithinOutputFormatOutputFormatEnum = "csv"
GetOccupantsWithinOutputFormatOutputFormatEnumShpz GetOccupantsWithinOutputFormatOutputFormatEnum = "shpz"
)


type GetOccupantsWithinOutputFormatPathParams struct {
    OutputFormat GetOccupantsWithinOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetOccupantsWithinOutputFormatLocationDescriptorEnum string

const (
    GetOccupantsWithinOutputFormatLocationDescriptorEnumAny GetOccupantsWithinOutputFormatLocationDescriptorEnum = "any"
GetOccupantsWithinOutputFormatLocationDescriptorEnumAccessPoint GetOccupantsWithinOutputFormatLocationDescriptorEnum = "accessPoint"
GetOccupantsWithinOutputFormatLocationDescriptorEnumFrontDoorPoint GetOccupantsWithinOutputFormatLocationDescriptorEnum = "frontDoorPoint"
GetOccupantsWithinOutputFormatLocationDescriptorEnumParcelPoint GetOccupantsWithinOutputFormatLocationDescriptorEnum = "parcelPoint"
GetOccupantsWithinOutputFormatLocationDescriptorEnumRooftopPoint GetOccupantsWithinOutputFormatLocationDescriptorEnum = "rooftopPoint"
GetOccupantsWithinOutputFormatLocationDescriptorEnumRoutingPoint GetOccupantsWithinOutputFormatLocationDescriptorEnum = "routingPoint"
)


type GetOccupantsWithinOutputFormatQueryParams struct {
    Bbox string `queryParam:"style=form,explode=true,name=bbox"`
    Brief *bool `queryParam:"style=form,explode=true,name=brief"`
    LocationDescriptor *GetOccupantsWithinOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    SetBack *int64 `queryParam:"style=form,explode=true,name=setBack"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    
}

type GetOccupantsWithinOutputFormatRequest struct {
    PathParams GetOccupantsWithinOutputFormatPathParams 
    QueryParams GetOccupantsWithinOutputFormatQueryParams 
    
}

type GetOccupantsWithinOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

