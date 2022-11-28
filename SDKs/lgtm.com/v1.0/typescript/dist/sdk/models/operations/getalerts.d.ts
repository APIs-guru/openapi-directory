import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsPathParams extends SpeakeasyBase {
    analysisId: string;
}
export declare class GetAlertsQueryParams extends SpeakeasyBase {
    excludedFiles?: boolean;
    sarifVersion?: string;
}
export declare class GetAlertsSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetAlertsRequest extends SpeakeasyBase {
    pathParams: GetAlertsPathParams;
    queryParams: GetAlertsQueryParams;
    security: GetAlertsSecurity;
}
export declare class GetAlertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAlerts200ApplicationJsonObject?: Map<string, any>;
    getAlerts200ApplicationSarifPlusJsonObject?: Map<string, any>;
    getAlerts200TextCsvString?: string;
}
