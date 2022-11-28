import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsActionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsActionsListPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsActionsListQueryParams;
    security: ConnectorsProjectsLocationsConnectionsActionsListSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsListResponse extends SpeakeasyBase {
    contentType: string;
    listActionsResponse?: shared.ListActionsResponse;
    statusCode: number;
}
