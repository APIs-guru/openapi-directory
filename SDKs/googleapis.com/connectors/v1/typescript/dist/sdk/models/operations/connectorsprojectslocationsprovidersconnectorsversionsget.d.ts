import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum {
    ConnectorVersionViewUnspecified = "CONNECTOR_VERSION_VIEW_UNSPECIFIED",
    ConnectorVersionViewBasic = "CONNECTOR_VERSION_VIEW_BASIC",
    ConnectorVersionViewFull = "CONNECTOR_VERSION_VIEW_FULL"
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams;
    security: ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse extends SpeakeasyBase {
    connectorVersion?: shared.ConnectorVersion;
    contentType: string;
    statusCode: number;
}
