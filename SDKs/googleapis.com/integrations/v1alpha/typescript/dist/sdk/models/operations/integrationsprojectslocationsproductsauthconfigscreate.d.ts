import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientCertificateEncryptedPrivateKey?: string;
    clientCertificatePassphrase?: string;
    clientCertificateSslCertificate?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams;
    queryParams: IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaAuthConfigInput;
    security: IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaAuthConfig?: shared.GoogleCloudIntegrationsV1alphaAuthConfig;
    statusCode: number;
}
