import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundlePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundlePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaGetBundleResponse?: shared.GoogleCloudIntegrationsV1alphaGetBundleResponse;
    statusCode: number;
}
