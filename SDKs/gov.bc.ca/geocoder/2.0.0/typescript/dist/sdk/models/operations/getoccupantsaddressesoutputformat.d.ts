import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetOccupantsAddressesOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetOccupantsAddressesOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetOccupantsAddressesOutputFormatOutputFormatEnum;
}
export declare enum GetOccupantsAddressesOutputFormatInterpolationEnum {
    Adaptive = "adaptive",
    Linear = "linear",
    None = "none"
}
export declare enum GetOccupantsAddressesOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare enum GetOccupantsAddressesOutputFormatStreetDirectionEnum {
    N = "N",
    S = "S",
    E = "E",
    W = "W",
    O = "O",
    Ne = "NE",
    No = "NO",
    Nw = "NW",
    Se = "SE",
    So = "SO",
    Sw = "SW"
}
export declare enum GetOccupantsAddressesOutputFormatUnitDesignatorEnum {
    Apt = "APT",
    Bldg = "BLDG",
    Bsmt = "BSMT",
    Flr = "FLR",
    Lobby = "LOBBY",
    Lwr = "LWR",
    Pad = "PAD",
    Ph = "PH",
    Rear = "REAR",
    Rm = "RM",
    Side = "SIDE",
    Site = "SITE",
    Suite = "SUITE",
    Th = "TH",
    Unit = "UNIT",
    Uppr = "UPPR"
}
export declare class GetOccupantsAddressesOutputFormatQueryParams extends SpeakeasyBase {
    addressString?: string;
    autoComplete?: boolean;
    bbox?: string;
    brief?: boolean;
    centre?: string;
    civicNumber?: string;
    civicNumberSuffix?: string;
    echo?: boolean;
    extrapolate?: boolean;
    interpolation?: GetOccupantsAddressesOutputFormatInterpolationEnum;
    localities?: string;
    localityName?: string;
    locationDescriptor?: GetOccupantsAddressesOutputFormatLocationDescriptorEnum;
    matchPrecision?: string;
    matchPrecisionNot?: string;
    maxDistance?: number;
    maxResults?: number;
    minScore?: number;
    notLocalities?: string;
    outputSrs?: number;
    parcelPoint?: string;
    provinceCode?: string;
    setBack?: number;
    siteName?: string;
    streetDirection?: GetOccupantsAddressesOutputFormatStreetDirectionEnum;
    streetName?: string;
    streetQualifier?: string;
    streetType?: string;
    tags?: string;
    unitDesignator?: GetOccupantsAddressesOutputFormatUnitDesignatorEnum;
    unitNumber?: string;
    unitNumberSuffix?: string;
}
export declare class GetOccupantsAddressesOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOccupantsAddressesOutputFormatPathParams;
    queryParams: GetOccupantsAddressesOutputFormatQueryParams;
}
export declare class GetOccupantsAddressesOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
