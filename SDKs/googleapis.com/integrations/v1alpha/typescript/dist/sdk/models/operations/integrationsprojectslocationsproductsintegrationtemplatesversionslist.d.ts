import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse?: shared.GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse;
    statusCode: number;
}
