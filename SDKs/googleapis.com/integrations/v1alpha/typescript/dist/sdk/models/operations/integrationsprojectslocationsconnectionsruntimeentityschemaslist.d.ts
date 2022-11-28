import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListPathParams;
    queryParams: IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListQueryParams;
    security: IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity;
}
export declare class IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse?: shared.GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse;
    statusCode: number;
}
