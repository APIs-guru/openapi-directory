import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsListQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsListQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationsListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListIntegrationsResponse?: shared.GoogleCloudIntegrationsV1alphaListIntegrationsResponse;
    statusCode: number;
}
