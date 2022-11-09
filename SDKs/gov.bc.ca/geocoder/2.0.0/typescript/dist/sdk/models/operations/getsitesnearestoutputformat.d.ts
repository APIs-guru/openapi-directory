import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSitesNearestOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetSitesNearestOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetSitesNearestOutputFormatOutputFormatEnum;
}
export declare enum GetSitesNearestOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetSitesNearestOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    excludeUnits?: boolean;
    locationDescriptor?: GetSitesNearestOutputFormatLocationDescriptorEnum;
    maxDistance?: number;
    onlyCivic?: boolean;
    outputSrs?: number;
    point: string;
    setBack?: number;
}
export declare class GetSitesNearestOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetSitesNearestOutputFormatPathParams;
    queryParams: GetSitesNearestOutputFormatQueryParams;
}
export declare class GetSitesNearestOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
