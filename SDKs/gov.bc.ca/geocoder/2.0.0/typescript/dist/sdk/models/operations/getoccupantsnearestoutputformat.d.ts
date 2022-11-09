import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetOccupantsNearestOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetOccupantsNearestOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetOccupantsNearestOutputFormatOutputFormatEnum;
}
export declare enum GetOccupantsNearestOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetOccupantsNearestOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    locationDescriptor?: GetOccupantsNearestOutputFormatLocationDescriptorEnum;
    maxDistance?: number;
    outputSrs?: number;
    point: string;
    setBack?: number;
    tags?: string;
}
export declare class GetOccupantsNearestOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOccupantsNearestOutputFormatPathParams;
    queryParams: GetOccupantsNearestOutputFormatQueryParams;
}
export declare class GetOccupantsNearestOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
