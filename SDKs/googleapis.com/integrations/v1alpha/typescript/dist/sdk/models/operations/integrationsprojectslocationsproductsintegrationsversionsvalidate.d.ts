import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsValidatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsValidatePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateQueryParams;
    request?: Map<string, any>;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaValidateIntegrationVersionResponse?: Map<string, any>;
    statusCode: number;
}
