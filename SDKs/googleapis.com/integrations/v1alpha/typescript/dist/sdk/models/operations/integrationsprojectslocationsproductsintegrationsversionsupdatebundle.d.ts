import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundlePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundlePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaUpdateBundleRequestInput;
    security: IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaUpdateBundleResponse?: shared.GoogleCloudIntegrationsV1alphaUpdateBundleResponse;
    statusCode: number;
}
