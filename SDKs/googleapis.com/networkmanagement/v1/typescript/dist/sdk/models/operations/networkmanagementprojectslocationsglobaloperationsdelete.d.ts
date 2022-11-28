import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalOperationsDeletePathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalOperationsDeleteQueryParams;
    security: NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
