import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListSuspensionsResponse?: shared.GoogleCloudIntegrationsV1alphaListSuspensionsResponse;
    statusCode: number;
}
