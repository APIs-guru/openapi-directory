package operations




type GetOccupantsNearOutputFormatOutputFormatEnum string

const (
    GetOccupantsNearOutputFormatOutputFormatEnumJSON GetOccupantsNearOutputFormatOutputFormatEnum = "json"
GetOccupantsNearOutputFormatOutputFormatEnumGeojson GetOccupantsNearOutputFormatOutputFormatEnum = "geojson"
GetOccupantsNearOutputFormatOutputFormatEnumXhtml GetOccupantsNearOutputFormatOutputFormatEnum = "xhtml"
GetOccupantsNearOutputFormatOutputFormatEnumKml GetOccupantsNearOutputFormatOutputFormatEnum = "kml"
GetOccupantsNearOutputFormatOutputFormatEnumGml GetOccupantsNearOutputFormatOutputFormatEnum = "gml"
GetOccupantsNearOutputFormatOutputFormatEnumCsv GetOccupantsNearOutputFormatOutputFormatEnum = "csv"
GetOccupantsNearOutputFormatOutputFormatEnumShpz GetOccupantsNearOutputFormatOutputFormatEnum = "shpz"
)


type GetOccupantsNearOutputFormatPathParams struct {
    OutputFormat GetOccupantsNearOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetOccupantsNearOutputFormatLocationDescriptorEnum string

const (
    GetOccupantsNearOutputFormatLocationDescriptorEnumAny GetOccupantsNearOutputFormatLocationDescriptorEnum = "any"
GetOccupantsNearOutputFormatLocationDescriptorEnumAccessPoint GetOccupantsNearOutputFormatLocationDescriptorEnum = "accessPoint"
GetOccupantsNearOutputFormatLocationDescriptorEnumFrontDoorPoint GetOccupantsNearOutputFormatLocationDescriptorEnum = "frontDoorPoint"
GetOccupantsNearOutputFormatLocationDescriptorEnumParcelPoint GetOccupantsNearOutputFormatLocationDescriptorEnum = "parcelPoint"
GetOccupantsNearOutputFormatLocationDescriptorEnumRooftopPoint GetOccupantsNearOutputFormatLocationDescriptorEnum = "rooftopPoint"
GetOccupantsNearOutputFormatLocationDescriptorEnumRoutingPoint GetOccupantsNearOutputFormatLocationDescriptorEnum = "routingPoint"
)


type GetOccupantsNearOutputFormatQueryParams struct {
    Brief *bool `queryParam:"style=form,explode=true,name=brief"`
    LocationDescriptor *GetOccupantsNearOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
    MaxDistance *int64 `queryParam:"style=form,explode=true,name=maxDistance"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Point string `queryParam:"style=form,explode=true,name=point"`
    SetBack *int64 `queryParam:"style=form,explode=true,name=setBack"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    
}

type GetOccupantsNearOutputFormatRequest struct {
    PathParams GetOccupantsNearOutputFormatPathParams 
    QueryParams GetOccupantsNearOutputFormatQueryParams 
    
}

type GetOccupantsNearOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

