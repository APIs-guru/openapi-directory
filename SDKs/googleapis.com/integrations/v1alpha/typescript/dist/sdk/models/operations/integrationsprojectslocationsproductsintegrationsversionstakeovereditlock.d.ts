import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams extends SpeakeasyBase {
    integrationVersion: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams;
    request?: Map<string, any>;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaTakeoverEditLockResponse?: shared.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse;
    statusCode: number;
}
