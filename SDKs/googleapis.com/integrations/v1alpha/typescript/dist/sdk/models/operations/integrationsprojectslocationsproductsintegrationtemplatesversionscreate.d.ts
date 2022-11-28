import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    newIntegration?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput;
    security: IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaIntegrationTemplateVersion?: shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion;
    statusCode: number;
}
