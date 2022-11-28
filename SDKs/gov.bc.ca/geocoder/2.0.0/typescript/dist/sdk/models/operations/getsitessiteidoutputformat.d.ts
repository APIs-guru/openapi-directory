import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSitesSiteIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetSitesSiteIdOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetSitesSiteIdOutputFormatOutputFormatEnum;
    siteId: string;
}
export declare enum GetSitesSiteIdOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetSitesSiteIdOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    locationDescriptor?: GetSitesSiteIdOutputFormatLocationDescriptorEnum;
    outputSrs?: number;
    setBack?: number;
}
export declare class GetSitesSiteIdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetSitesSiteIdOutputFormatPathParams;
    queryParams: GetSitesSiteIdOutputFormatQueryParams;
}
export declare class GetSitesSiteIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
