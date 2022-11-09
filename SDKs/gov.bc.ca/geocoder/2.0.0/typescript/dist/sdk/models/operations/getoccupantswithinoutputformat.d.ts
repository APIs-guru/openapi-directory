import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetOccupantsWithinOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetOccupantsWithinOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetOccupantsWithinOutputFormatOutputFormatEnum;
}
export declare enum GetOccupantsWithinOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetOccupantsWithinOutputFormatQueryParams extends SpeakeasyBase {
    bbox: string;
    brief?: boolean;
    locationDescriptor?: GetOccupantsWithinOutputFormatLocationDescriptorEnum;
    maxResults?: number;
    outputSrs?: number;
    setBack?: number;
    tags?: string;
}
export declare class GetOccupantsWithinOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOccupantsWithinOutputFormatPathParams;
    queryParams: GetOccupantsWithinOutputFormatQueryParams;
}
export declare class GetOccupantsWithinOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
