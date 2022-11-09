import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAddressesOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetAddressesOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetAddressesOutputFormatOutputFormatEnum;
}
export declare enum GetAddressesOutputFormatInterpolationEnum {
    Adaptive = "adaptive",
    Linear = "linear",
    None = "none"
}
export declare enum GetAddressesOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare enum GetAddressesOutputFormatStreetDirectionEnum {
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
export declare enum GetAddressesOutputFormatUnitDesignatorEnum {
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
export declare class GetAddressesOutputFormatQueryParams extends SpeakeasyBase {
    addressString?: string;
    autoComplete?: boolean;
    bbox?: string;
    brief?: boolean;
    centre?: string;
    civicNumber?: string;
    civicNumberSuffix?: string;
    echo?: boolean;
    extrapolate?: boolean;
    interpolation?: GetAddressesOutputFormatInterpolationEnum;
    localities?: string;
    localityName?: string;
    locationDescriptor?: GetAddressesOutputFormatLocationDescriptorEnum;
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
    streetDirection?: GetAddressesOutputFormatStreetDirectionEnum;
    streetName?: string;
    streetQualifier?: string;
    streetType?: string;
    unitDesignator?: GetAddressesOutputFormatUnitDesignatorEnum;
    unitNumber?: string;
    unitNumberSuffix?: string;
}
export declare class GetAddressesOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetAddressesOutputFormatPathParams;
    queryParams: GetAddressesOutputFormatQueryParams;
}
export declare class GetAddressesOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
