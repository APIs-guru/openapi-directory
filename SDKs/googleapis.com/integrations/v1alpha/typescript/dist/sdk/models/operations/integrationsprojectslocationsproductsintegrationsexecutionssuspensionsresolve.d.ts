import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaResolveSuspensionResponse?: Map<string, any>;
    statusCode: number;
}
