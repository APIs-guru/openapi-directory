import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetOccupantsNearOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetOccupantsNearOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetOccupantsNearOutputFormatOutputFormatEnum;
}
export declare enum GetOccupantsNearOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetOccupantsNearOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    locationDescriptor?: GetOccupantsNearOutputFormatLocationDescriptorEnum;
    maxDistance?: number;
    maxResults?: number;
    outputSrs?: number;
    point: string;
    setBack?: number;
    tags?: string;
}
export declare class GetOccupantsNearOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOccupantsNearOutputFormatPathParams;
    queryParams: GetOccupantsNearOutputFormatQueryParams;
}
export declare class GetOccupantsNearOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
