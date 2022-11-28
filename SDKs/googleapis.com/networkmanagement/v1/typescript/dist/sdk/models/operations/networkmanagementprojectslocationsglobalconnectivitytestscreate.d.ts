import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    testId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams;
    request?: shared.ConnectivityTestInput;
    security: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
