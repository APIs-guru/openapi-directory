import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsConnectionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsCreatePathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsCreateQueryParams;
    request?: shared.ConnectionInput;
    security: ConnectorsProjectsLocationsConnectionsCreateSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
