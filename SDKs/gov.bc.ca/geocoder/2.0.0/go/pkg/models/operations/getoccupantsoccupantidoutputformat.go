package operations




type GetOccupantsOccupantIDOutputFormatOutputFormatEnum string

const (
    GetOccupantsOccupantIDOutputFormatOutputFormatEnumJSON GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "json"
GetOccupantsOccupantIDOutputFormatOutputFormatEnumGeojson GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "geojson"
GetOccupantsOccupantIDOutputFormatOutputFormatEnumXhtml GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "xhtml"
GetOccupantsOccupantIDOutputFormatOutputFormatEnumKml GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "kml"
GetOccupantsOccupantIDOutputFormatOutputFormatEnumGml GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "gml"
GetOccupantsOccupantIDOutputFormatOutputFormatEnumCsv GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "csv"
GetOccupantsOccupantIDOutputFormatOutputFormatEnumShpz GetOccupantsOccupantIDOutputFormatOutputFormatEnum = "shpz"
)


type GetOccupantsOccupantIDOutputFormatPathParams struct {
    OccupantID string `pathParam:"style=simple,explode=false,name=occupantID"`
    OutputFormat GetOccupantsOccupantIDOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum string

const (
    GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumAny GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum = "any"
GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumAccessPoint GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum = "accessPoint"
GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumFrontDoorPoint GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum = "frontDoorPoint"
GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumParcelPoint GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum = "parcelPoint"
GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumRooftopPoint GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum = "rooftopPoint"
GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumRoutingPoint GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum = "routingPoint"
)


type GetOccupantsOccupantIDOutputFormatQueryParams struct {
    Brief *bool `queryParam:"style=form,explode=true,name=brief"`
    LocationDescriptor *GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    SetBack *int64 `queryParam:"style=form,explode=true,name=setBack"`
    
}

type GetOccupantsOccupantIDOutputFormatRequest struct {
    PathParams GetOccupantsOccupantIDOutputFormatPathParams 
    QueryParams GetOccupantsOccupantIDOutputFormatQueryParams 
    
}

type GetOccupantsOccupantIDOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

