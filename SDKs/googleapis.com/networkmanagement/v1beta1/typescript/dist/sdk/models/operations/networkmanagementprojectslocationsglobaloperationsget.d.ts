import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsGetRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalOperationsGetPathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalOperationsGetQueryParams;
    security: NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
