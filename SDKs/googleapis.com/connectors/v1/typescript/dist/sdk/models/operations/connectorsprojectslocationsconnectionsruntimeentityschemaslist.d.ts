import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListQueryParams;
    security: ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse extends SpeakeasyBase {
    contentType: string;
    listRuntimeEntitySchemasResponse?: shared.ListRuntimeEntitySchemasResponse;
    statusCode: number;
}
