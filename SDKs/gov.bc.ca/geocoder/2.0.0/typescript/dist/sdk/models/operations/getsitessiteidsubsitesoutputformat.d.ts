import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetSitesSiteIdSubsitesOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum;
    siteId: string;
}
export declare enum GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
export declare class GetSitesSiteIdSubsitesOutputFormatQueryParams extends SpeakeasyBase {
    brief?: boolean;
    locationDescriptor?: GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum;
    outputSrs?: number;
    setBack?: number;
}
export declare class GetSitesSiteIdSubsitesOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetSitesSiteIdSubsitesOutputFormatPathParams;
    queryParams: GetSitesSiteIdSubsitesOutputFormatQueryParams;
}
export declare class GetSitesSiteIdSubsitesOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
