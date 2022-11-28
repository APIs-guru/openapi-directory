import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaExecuteIntegrationsResponse?: shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse;
    statusCode: number;
}
