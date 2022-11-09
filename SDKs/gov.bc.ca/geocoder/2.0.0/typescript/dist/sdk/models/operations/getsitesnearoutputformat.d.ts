import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSitesNearOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetSitesNearOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetSitesNearOutputFormatOutputFormatEnum;
}
export declare enum GetSitesNearOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetSitesNearOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    excludeUnits?: boolean;
    locationDescriptor?: GetSitesNearOutputFormatLocationDescriptorEnum;
    maxDistance?: number;
    maxResults?: number;
    onlyCivic?: boolean;
    outputSrs?: number;
    point: string;
    setBack?: number;
}
export declare class GetSitesNearOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetSitesNearOutputFormatPathParams;
    queryParams: GetSitesNearOutputFormatQueryParams;
}
export declare class GetSitesNearOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
