import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetJurisdictionFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetJurisdictionQueryParams extends SpeakeasyBase {
    format?: GetJurisdictionFormatEnum;
}
export declare class GetJurisdictionRequest extends SpeakeasyBase {
    queryParams: GetJurisdictionQueryParams;
}
export declare class GetJurisdictionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
