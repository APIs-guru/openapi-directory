import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsConnectionsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsConnectionsListPathParams;
    queryParams: IntegrationsProjectsLocationsConnectionsListQueryParams;
    security: IntegrationsProjectsLocationsConnectionsListSecurity;
}
export declare class IntegrationsProjectsLocationsConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListConnectionsResponse?: shared.GoogleCloudIntegrationsV1alphaListConnectionsResponse;
    statusCode: number;
}
