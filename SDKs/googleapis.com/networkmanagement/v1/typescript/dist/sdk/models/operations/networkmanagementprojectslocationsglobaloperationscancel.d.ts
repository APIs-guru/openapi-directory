import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
