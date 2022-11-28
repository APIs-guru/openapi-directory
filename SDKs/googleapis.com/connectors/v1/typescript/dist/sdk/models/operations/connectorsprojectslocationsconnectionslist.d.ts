import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ConnectorsProjectsLocationsConnectionsListViewEnum {
    ConnectionViewUnspecified = "CONNECTION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ConnectorsProjectsLocationsConnectionsListQueryParams extends SpeakeasyBase {
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
    view?: ConnectorsProjectsLocationsConnectionsListViewEnum;
}
export declare class ConnectorsProjectsLocationsConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsListPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsListQueryParams;
    security: ConnectorsProjectsLocationsConnectionsListSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
