import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsCreateBundlePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsCreateBundleQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsCreateBundleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsCreateBundleRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsCreateBundlePathParams;
    queryParams: IntegrationsProjectsLocationsProductsCreateBundleQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaCreateBundleRequest;
    security: IntegrationsProjectsLocationsProductsCreateBundleSecurity;
}
export declare class IntegrationsProjectsLocationsProductsCreateBundleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaCreateBundleResponse?: shared.GoogleCloudIntegrationsV1alphaCreateBundleResponse;
    statusCode: number;
}
