import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum {
    ConnectorVersionViewUnspecified = "CONNECTOR_VERSION_VIEW_UNSPECIFIED",
    ConnectorVersionViewBasic = "CONNECTOR_VERSION_VIEW_BASIC",
    ConnectorVersionViewFull = "CONNECTOR_VERSION_VIEW_FULL"
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams extends SpeakeasyBase {
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
    view?: ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams;
    security: ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectorVersionsResponse?: shared.ListConnectorVersionsResponse;
    statusCode: number;
}
