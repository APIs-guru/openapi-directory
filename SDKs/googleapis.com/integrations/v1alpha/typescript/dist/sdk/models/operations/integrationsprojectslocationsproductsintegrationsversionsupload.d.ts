import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaUploadIntegrationVersionResponse?: shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse;
    statusCode: number;
}
