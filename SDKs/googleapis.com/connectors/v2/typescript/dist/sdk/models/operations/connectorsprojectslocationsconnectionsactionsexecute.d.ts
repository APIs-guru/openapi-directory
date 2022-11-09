import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsActionsExecutePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams extends SpeakeasyBase {
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
}
export declare class ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsExecuteRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsActionsExecutePathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams;
    request?: shared.ExecuteActionRequest;
    security: ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsExecuteResponse extends SpeakeasyBase {
    contentType: string;
    executeActionResponse?: shared.ExecuteActionResponse;
    statusCode: number;
}
