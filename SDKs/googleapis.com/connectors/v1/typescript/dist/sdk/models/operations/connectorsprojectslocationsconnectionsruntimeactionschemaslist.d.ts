import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListQueryParams;
    security: ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse extends SpeakeasyBase {
    contentType: string;
    listRuntimeActionSchemasResponse?: shared.ListRuntimeActionSchemasResponse;
    statusCode: number;
}
