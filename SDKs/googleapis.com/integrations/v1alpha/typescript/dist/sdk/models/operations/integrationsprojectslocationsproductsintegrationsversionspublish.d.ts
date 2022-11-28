import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishQueryParams;
    request?: Map<string, any>;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaPublishIntegrationVersionResponse?: Map<string, any>;
    statusCode: number;
}
