import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListPathParams;
    queryParams: IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListQueryParams;
    security: IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity;
}
export declare class IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse?: shared.GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse;
    statusCode: number;
}
