import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetJurisdictiongeographyFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetJurisdictiongeographyQueryParams extends SpeakeasyBase {
    format?: GetJurisdictiongeographyFormatEnum;
}
export declare class GetJurisdictiongeographyRequest extends SpeakeasyBase {
    queryParams: GetJurisdictiongeographyQueryParams;
}
export declare class GetJurisdictiongeographyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
