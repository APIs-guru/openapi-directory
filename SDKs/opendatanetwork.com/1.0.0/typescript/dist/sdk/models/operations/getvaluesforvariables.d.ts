import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetValuesForVariablesFormatEnum {
    Google = "google"
}
export declare class GetValuesForVariablesQueryParams extends SpeakeasyBase {
    appToken?: string;
    describe?: boolean;
    entityId?: string;
    forecast?: number;
    format?: GetValuesForVariablesFormatEnum;
    variable: string;
}
export declare class GetValuesForVariablesHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class GetValuesForVariablesRequest extends SpeakeasyBase {
    queryParams: GetValuesForVariablesQueryParams;
    headers: GetValuesForVariablesHeaders;
}
export declare class GetValuesForVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
