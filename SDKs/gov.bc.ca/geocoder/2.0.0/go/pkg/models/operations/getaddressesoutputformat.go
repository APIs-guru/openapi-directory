package operations




type GetAddressesOutputFormatOutputFormatEnum string

const (
    GetAddressesOutputFormatOutputFormatEnumJSON GetAddressesOutputFormatOutputFormatEnum = "json"
GetAddressesOutputFormatOutputFormatEnumGeojson GetAddressesOutputFormatOutputFormatEnum = "geojson"
GetAddressesOutputFormatOutputFormatEnumXhtml GetAddressesOutputFormatOutputFormatEnum = "xhtml"
GetAddressesOutputFormatOutputFormatEnumKml GetAddressesOutputFormatOutputFormatEnum = "kml"
GetAddressesOutputFormatOutputFormatEnumGml GetAddressesOutputFormatOutputFormatEnum = "gml"
GetAddressesOutputFormatOutputFormatEnumCsv GetAddressesOutputFormatOutputFormatEnum = "csv"
GetAddressesOutputFormatOutputFormatEnumShpz GetAddressesOutputFormatOutputFormatEnum = "shpz"
)


type GetAddressesOutputFormatPathParams struct {
    OutputFormat GetAddressesOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetAddressesOutputFormatInterpolationEnum string

const (
    GetAddressesOutputFormatInterpolationEnumAdaptive GetAddressesOutputFormatInterpolationEnum = "adaptive"
GetAddressesOutputFormatInterpolationEnumLinear GetAddressesOutputFormatInterpolationEnum = "linear"
GetAddressesOutputFormatInterpolationEnumNone GetAddressesOutputFormatInterpolationEnum = "none"
)



type GetAddressesOutputFormatLocationDescriptorEnum string

const (
    GetAddressesOutputFormatLocationDescriptorEnumAny GetAddressesOutputFormatLocationDescriptorEnum = "any"
GetAddressesOutputFormatLocationDescriptorEnumAccessPoint GetAddressesOutputFormatLocationDescriptorEnum = "accessPoint"
GetAddressesOutputFormatLocationDescriptorEnumFrontDoorPoint GetAddressesOutputFormatLocationDescriptorEnum = "frontDoorPoint"
GetAddressesOutputFormatLocationDescriptorEnumParcelPoint GetAddressesOutputFormatLocationDescriptorEnum = "parcelPoint"
GetAddressesOutputFormatLocationDescriptorEnumRooftopPoint GetAddressesOutputFormatLocationDescriptorEnum = "rooftopPoint"
GetAddressesOutputFormatLocationDescriptorEnumRoutingPoint GetAddressesOutputFormatLocationDescriptorEnum = "routingPoint"
)



type GetAddressesOutputFormatStreetDirectionEnum string

const (
    GetAddressesOutputFormatStreetDirectionEnumN GetAddressesOutputFormatStreetDirectionEnum = "N"
GetAddressesOutputFormatStreetDirectionEnumS GetAddressesOutputFormatStreetDirectionEnum = "S"
GetAddressesOutputFormatStreetDirectionEnumE GetAddressesOutputFormatStreetDirectionEnum = "E"
GetAddressesOutputFormatStreetDirectionEnumW GetAddressesOutputFormatStreetDirectionEnum = "W"
GetAddressesOutputFormatStreetDirectionEnumO GetAddressesOutputFormatStreetDirectionEnum = "O"
GetAddressesOutputFormatStreetDirectionEnumNe GetAddressesOutputFormatStreetDirectionEnum = "NE"
GetAddressesOutputFormatStreetDirectionEnumNo GetAddressesOutputFormatStreetDirectionEnum = "NO"
GetAddressesOutputFormatStreetDirectionEnumNw GetAddressesOutputFormatStreetDirectionEnum = "NW"
GetAddressesOutputFormatStreetDirectionEnumSe GetAddressesOutputFormatStreetDirectionEnum = "SE"
GetAddressesOutputFormatStreetDirectionEnumSo GetAddressesOutputFormatStreetDirectionEnum = "SO"
GetAddressesOutputFormatStreetDirectionEnumSw GetAddressesOutputFormatStreetDirectionEnum = "SW"
)



type GetAddressesOutputFormatUnitDesignatorEnum string

const (
    GetAddressesOutputFormatUnitDesignatorEnumApt GetAddressesOutputFormatUnitDesignatorEnum = "APT"
GetAddressesOutputFormatUnitDesignatorEnumBldg GetAddressesOutputFormatUnitDesignatorEnum = "BLDG"
GetAddressesOutputFormatUnitDesignatorEnumBsmt GetAddressesOutputFormatUnitDesignatorEnum = "BSMT"
GetAddressesOutputFormatUnitDesignatorEnumFlr GetAddressesOutputFormatUnitDesignatorEnum = "FLR"
GetAddressesOutputFormatUnitDesignatorEnumLobby GetAddressesOutputFormatUnitDesignatorEnum = "LOBBY"
GetAddressesOutputFormatUnitDesignatorEnumLwr GetAddressesOutputFormatUnitDesignatorEnum = "LWR"
GetAddressesOutputFormatUnitDesignatorEnumPad GetAddressesOutputFormatUnitDesignatorEnum = "PAD"
GetAddressesOutputFormatUnitDesignatorEnumPh GetAddressesOutputFormatUnitDesignatorEnum = "PH"
GetAddressesOutputFormatUnitDesignatorEnumRear GetAddressesOutputFormatUnitDesignatorEnum = "REAR"
GetAddressesOutputFormatUnitDesignatorEnumRm GetAddressesOutputFormatUnitDesignatorEnum = "RM"
GetAddressesOutputFormatUnitDesignatorEnumSide GetAddressesOutputFormatUnitDesignatorEnum = "SIDE"
GetAddressesOutputFormatUnitDesignatorEnumSite GetAddressesOutputFormatUnitDesignatorEnum = "SITE"
GetAddressesOutputFormatUnitDesignatorEnumSuite GetAddressesOutputFormatUnitDesignatorEnum = "SUITE"
GetAddressesOutputFormatUnitDesignatorEnumTh GetAddressesOutputFormatUnitDesignatorEnum = "TH"
GetAddressesOutputFormatUnitDesignatorEnumUnit GetAddressesOutputFormatUnitDesignatorEnum = "UNIT"
GetAddressesOutputFormatUnitDesignatorEnumUppr GetAddressesOutputFormatUnitDesignatorEnum = "UPPR"
)


type GetAddressesOutputFormatQueryParams struct {
    AddressString *string `queryParam:"style=form,explode=true,name=addressString"`
    AutoComplete *bool `queryParam:"style=form,explode=true,name=autoComplete"`
    Bbox *string `queryParam:"style=form,explode=true,name=bbox"`
    Brief *bool `queryParam:"style=form,explode=true,name=brief"`
    Centre *string `queryParam:"style=form,explode=true,name=centre"`
    CivicNumber *string `queryParam:"style=form,explode=true,name=civicNumber"`
    CivicNumberSuffix *string `queryParam:"style=form,explode=true,name=civicNumberSuffix"`
    Echo *bool `queryParam:"style=form,explode=true,name=echo"`
    Extrapolate *bool `queryParam:"style=form,explode=true,name=extrapolate"`
    Interpolation *GetAddressesOutputFormatInterpolationEnum `queryParam:"style=form,explode=true,name=interpolation"`
    Localities *string `queryParam:"style=form,explode=true,name=localities"`
    LocalityName *string `queryParam:"style=form,explode=true,name=localityName"`
    LocationDescriptor *GetAddressesOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
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
    StreetDirection *GetAddressesOutputFormatStreetDirectionEnum `queryParam:"style=form,explode=true,name=streetDirection"`
    StreetName *string `queryParam:"style=form,explode=true,name=streetName"`
    StreetQualifier *string `queryParam:"style=form,explode=true,name=streetQualifier"`
    StreetType *string `queryParam:"style=form,explode=true,name=streetType"`
    UnitDesignator *GetAddressesOutputFormatUnitDesignatorEnum `queryParam:"style=form,explode=true,name=unitDesignator"`
    UnitNumber *string `queryParam:"style=form,explode=true,name=unitNumber"`
    UnitNumberSuffix *string `queryParam:"style=form,explode=true,name=unitNumberSuffix"`
    
}

type GetAddressesOutputFormatRequest struct {
    PathParams GetAddressesOutputFormatPathParams 
    QueryParams GetAddressesOutputFormatQueryParams 
    
}

type GetAddressesOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

