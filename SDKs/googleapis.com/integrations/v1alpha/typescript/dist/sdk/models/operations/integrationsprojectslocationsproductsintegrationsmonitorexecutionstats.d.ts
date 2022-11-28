import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest;
    security: IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaMonitorExecutionStatsResponse?: shared.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse;
    statusCode: number;
}
