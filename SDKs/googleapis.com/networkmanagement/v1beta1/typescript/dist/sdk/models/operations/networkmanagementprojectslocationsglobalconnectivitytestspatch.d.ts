import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchQueryParams;
    request?: shared.ConnectivityTestInput;
    security: NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
