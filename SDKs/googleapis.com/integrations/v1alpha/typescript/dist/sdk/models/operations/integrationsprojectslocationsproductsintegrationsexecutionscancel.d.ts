import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelQueryParams;
    request?: Map<string, any>;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaCancelExecutionResponse?: shared.GoogleCloudIntegrationsV1alphaCancelExecutionResponse;
    statusCode: number;
}
