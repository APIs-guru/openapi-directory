import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetParcelsPidsSiteIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetParcelsPidsSiteIdOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetParcelsPidsSiteIdOutputFormatOutputFormatEnum;
    siteId: string;
}
export declare class GetParcelsPidsSiteIdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetParcelsPidsSiteIdOutputFormatPathParams;
}
export declare class GetParcelsPidsSiteIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
