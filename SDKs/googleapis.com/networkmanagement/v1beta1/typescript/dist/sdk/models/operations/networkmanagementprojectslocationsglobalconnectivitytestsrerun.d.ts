import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams extends SpeakeasyBase {
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
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams;
    request?: Map<string, any>;
    security: NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
