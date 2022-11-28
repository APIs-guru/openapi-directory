import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaLiftSuspensionRequest;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaLiftSuspensionResponse?: shared.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse;
    statusCode: number;
}
