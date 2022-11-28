import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsAuthConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsAuthConfigsListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams;
    security: IntegrationsProjectsLocationsProductsAuthConfigsListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsAuthConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListAuthConfigsResponse?: shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse;
    statusCode: number;
}
