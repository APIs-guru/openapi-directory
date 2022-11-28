import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetOccupantsOccupantIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetOccupantsOccupantIdOutputFormatPathParams extends SpeakeasyBase {
    occupantId: string;
    outputFormat: GetOccupantsOccupantIdOutputFormatOutputFormatEnum;
}
export declare enum GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetOccupantsOccupantIdOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    locationDescriptor?: GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum;
    outputSrs?: number;
    setBack?: number;
}
export declare class GetOccupantsOccupantIdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOccupantsOccupantIdOutputFormatPathParams;
    queryParams: GetOccupantsOccupantIdOutputFormatQueryParams;
}
export declare class GetOccupantsOccupantIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
