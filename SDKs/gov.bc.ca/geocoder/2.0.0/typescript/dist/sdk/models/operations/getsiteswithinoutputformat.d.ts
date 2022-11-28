import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSitesWithinOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetSitesWithinOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetSitesWithinOutputFormatOutputFormatEnum;
}
export declare enum GetSitesWithinOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetSitesWithinOutputFormatQueryParams extends SpeakeasyBase {
    bbox: string;
    brief?: boolean;
    excludeUnits?: boolean;
    locationDescriptor?: GetSitesWithinOutputFormatLocationDescriptorEnum;
    maxResults?: number;
    onlyCivic?: boolean;
    outputSrs?: number;
    setBack?: number;
}
export declare class GetSitesWithinOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetSitesWithinOutputFormatPathParams;
    queryParams: GetSitesWithinOutputFormatQueryParams;
}
export declare class GetSitesWithinOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
