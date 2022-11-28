import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsSchedulePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsScheduleQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsSchedulePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsScheduleQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest;
    security: IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaScheduleIntegrationsResponse?: shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse;
    statusCode: number;
}
