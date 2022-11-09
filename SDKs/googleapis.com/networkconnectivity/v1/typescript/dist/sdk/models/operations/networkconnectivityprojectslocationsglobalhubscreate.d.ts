import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hubId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams;
    queryParams: NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams;
    request?: shared.Hub;
    security: NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
}
export declare class NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
