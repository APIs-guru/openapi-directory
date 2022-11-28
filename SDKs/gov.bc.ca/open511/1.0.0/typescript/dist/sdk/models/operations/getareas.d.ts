import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAreasFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetAreasQueryParams extends SpeakeasyBase {
    format?: GetAreasFormatEnum;
}
export declare class GetAreasRequest extends SpeakeasyBase {
    queryParams: GetAreasQueryParams;
}
export declare class GetAreasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
