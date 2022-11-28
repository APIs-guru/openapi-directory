import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDashboardConfigurationPageQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class GetDashboardConfigurationPageRequest extends SpeakeasyBase {
    queryParams: GetDashboardConfigurationPageQueryParams;
}
export declare class GetDashboardConfigurationPageResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardConfigurationPage200ApplicationXJavascriptBinaryString?: Uint8Array;
    getDashboardConfigurationPage200TextHtmlBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
