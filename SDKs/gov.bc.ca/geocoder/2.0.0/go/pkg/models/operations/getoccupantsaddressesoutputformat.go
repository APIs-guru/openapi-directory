package operations




type GetOccupantsAddressesOutputFormatOutputFormatEnum string

const (
    GetOccupantsAddressesOutputFormatOutputFormatEnumJSON GetOccupantsAddressesOutputFormatOutputFormatEnum = "json"
GetOccupantsAddressesOutputFormatOutputFormatEnumGeojson GetOccupantsAddressesOutputFormatOutputFormatEnum = "geojson"
GetOccupantsAddressesOutputFormatOutputFormatEnumXhtml GetOccupantsAddressesOutputFormatOutputFormatEnum = "xhtml"
GetOccupantsAddressesOutputFormatOutputFormatEnumKml GetOccupantsAddressesOutputFormatOutputFormatEnum = "kml"
GetOccupantsAddressesOutputFormatOutputFormatEnumGml GetOccupantsAddressesOutputFormatOutputFormatEnum = "gml"
GetOccupantsAddressesOutputFormatOutputFormatEnumCsv GetOccupantsAddressesOutputFormatOutputFormatEnum = "csv"
GetOccupantsAddressesOutputFormatOutputFormatEnumShpz GetOccupantsAddressesOutputFormatOutputFormatEnum = "shpz"
)


type GetOccupantsAddressesOutputFormatPathParams struct {
    OutputFormat GetOccupantsAddressesOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetOccupantsAddressesOutputFormatInterpolationEnum string

const (
    GetOccupantsAddressesOutputFormatInterpolationEnumAdaptive GetOccupantsAddressesOutputFormatInterpolationEnum = "adaptive"
GetOccupantsAddressesOutputFormatInterpolationEnumLinear GetOccupantsAddressesOutputFormatInterpolationEnum = "linear"
GetOccupantsAddressesOutputFormatInterpolationEnumNone GetOccupantsAddressesOutputFormatInterpolationEnum = "none"
)



type GetOccupantsAddressesOutputFormatLocationDescriptorEnum string

const (
    GetOccupantsAddressesOutputFormatLocationDescriptorEnumAny GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "any"
GetOccupantsAddressesOutputFormatLocationDescriptorEnumAccessPoint GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "accessPoint"
GetOccupantsAddressesOutputFormatLocationDescriptorEnumFrontDoorPoint GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "frontDoorPoint"
GetOccupantsAddressesOutputFormatLocationDescriptorEnumParcelPoint GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "parcelPoint"
GetOccupantsAddressesOutputFormatLocationDescriptorEnumRooftopPoint GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "rooftopPoint"
GetOccupantsAddressesOutputFormatLocationDescriptorEnumRoutingPoint GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "routingPoint"
)



type GetOccupantsAddressesOutputFormatStreetDirectionEnum string

const (
    GetOccupantsAddressesOutputFormatStreetDirectionEnumN GetOccupantsAddressesOutputFormatStreetDirectionEnum = "N"
GetOccupantsAddressesOutputFormatStreetDirectionEnumS GetOccupantsAddressesOutputFormatStreetDirectionEnum = "S"
GetOccupantsAddressesOutputFormatStreetDirectionEnumE GetOccupantsAddressesOutputFormatStreetDirectionEnum = "E"
GetOccupantsAddressesOutputFormatStreetDirectionEnumW GetOccupantsAddressesOutputFormatStreetDirectionEnum = "W"
GetOccupantsAddressesOutputFormatStreetDirectionEnumO GetOccupantsAddressesOutputFormatStreetDirectionEnum = "O"
GetOccupantsAddressesOutputFormatStreetDirectionEnumNe GetOccupantsAddressesOutputFormatStreetDirectionEnum = "NE"
GetOccupantsAddressesOutputFormatStreetDirectionEnumNo GetOccupantsAddressesOutputFormatStreetDirectionEnum = "NO"
GetOccupantsAddressesOutputFormatStreetDirectionEnumNw GetOccupantsAddressesOutputFormatStreetDirectionEnum = "NW"
GetOccupantsAddressesOutputFormatStreetDirectionEnumSe GetOccupantsAddressesOutputFormatStreetDirectionEnum = "SE"
GetOccupantsAddressesOutputFormatStreetDirectionEnumSo GetOccupantsAddressesOutputFormatStreetDirectionEnum = "SO"
GetOccupantsAddressesOutputFormatStreetDirectionEnumSw GetOccupantsAddressesOutputFormatStreetDirectionEnum = "SW"
)



type GetOccupantsAddressesOutputFormatUnitDesignatorEnum string

const (
    GetOccupantsAddressesOutputFormatUnitDesignatorEnumApt GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "APT"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumBldg GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "BLDG"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumBsmt GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "BSMT"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumFlr GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "FLR"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumLobby GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "LOBBY"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumLwr GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "LWR"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumPad GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "PAD"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumPh GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "PH"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumRear GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "REAR"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumRm GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "RM"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumSide GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "SIDE"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumSite GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "SITE"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumSuite GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "SUITE"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumTh GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "TH"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumUnit GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "UNIT"
GetOccupantsAddressesOutputFormatUnitDesignatorEnumUppr GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "UPPR"
)


type GetOccupantsAddressesOutputFormatQueryParams struct {
    AddressString *string `queryParam:"style=form,explode=true,name=addressString"`
    AutoComplete *bool `queryParam:"style=form,explode=true,name=autoComplete"`
    Bbox *string `queryParam:"style=form,explode=true,name=bbox"`
    Brief *bool `queryParam:"style=form,explode=true,name=brief"`
    Centre *string `queryParam:"style=form,explode=true,name=centre"`
    CivicNumber *string `queryParam:"style=form,explode=true,name=civicNumber"`
    CivicNumberSuffix *string `queryParam:"style=form,explode=true,name=civicNumberSuffix"`
    Echo *bool `queryParam:"style=form,explode=true,name=echo"`
    Extrapolate *bool `queryParam:"style=form,explode=true,name=extrapolate"`
    Interpolation *GetOccupantsAddressesOutputFormatInterpolationEnum `queryParam:"style=form,explode=true,name=interpolation"`
    Localities *string `queryParam:"style=form,explode=true,name=localities"`
    LocalityName *string `queryParam:"style=form,explode=true,name=localityName"`
    LocationDescriptor *GetOccupantsAddressesOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
    MatchPrecision *string `queryParam:"style=form,explode=true,name=matchPrecision"`
    MatchPrecisionNot *string `queryParam:"style=form,explode=true,name=matchPrecisionNot"`
    MaxDistance *float64 `queryParam:"style=form,explode=true,name=maxDistance"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    MinScore *int64 `queryParam:"style=form,explode=true,name=minScore"`
    NotLocalities *string `queryParam:"style=form,explode=true,name=notLocalities"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    ParcelPoint *string `queryParam:"style=form,explode=true,name=parcelPoint"`
    ProvinceCode *string `queryParam:"style=form,explode=true,name=provinceCode"`
    SetBack *int64 `queryParam:"style=form,explode=true,name=setBack"`
    SiteName *string `queryParam:"style=form,explode=true,name=siteName"`
    StreetDirection *GetOccupantsAddressesOutputFormatStreetDirectionEnum `queryParam:"style=form,explode=true,name=streetDirection"`
    StreetName *string `queryParam:"style=form,explode=true,name=streetName"`
    StreetQualifier *string `queryParam:"style=form,explode=true,name=streetQualifier"`
    StreetType *string `queryParam:"style=form,explode=true,name=streetType"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    UnitDesignator *GetOccupantsAddressesOutputFormatUnitDesignatorEnum `queryParam:"style=form,explode=true,name=unitDesignator"`
    UnitNumber *string `queryParam:"style=form,explode=true,name=unitNumber"`
    UnitNumberSuffix *string `queryParam:"style=form,explode=true,name=unitNumberSuffix"`
    
}

type GetOccupantsAddressesOutputFormatRequest struct {
    PathParams GetOccupantsAddressesOutputFormatPathParams 
    QueryParams GetOccupantsAddressesOutputFormatQueryParams 
    
}

type GetOccupantsAddressesOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

