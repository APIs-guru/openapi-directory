import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsArchiveBundlePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsArchiveBundlePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleQueryParams;
    request?: Map<string, any>;
    security: IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaArchiveBundleResponse?: Map<string, any>;
    statusCode: number;
}
