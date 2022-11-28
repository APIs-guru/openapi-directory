import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetNamesNameIdOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv",
    Html = "html"
}
export declare class GetNamesNameIdOutputFormatPathParams extends SpeakeasyBase {
    nameId: number;
    outputFormat: GetNamesNameIdOutputFormatOutputFormatEnum;
}
export declare class GetNamesNameIdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetNamesNameIdOutputFormatPathParams;
}
export declare class GetNamesNameIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
