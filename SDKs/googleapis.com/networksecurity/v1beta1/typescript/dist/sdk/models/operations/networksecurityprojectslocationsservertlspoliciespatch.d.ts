import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesPatchQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsServerTlsPoliciesPatchPathParams;
    queryParams: NetworksecurityProjectsLocationsServerTlsPoliciesPatchQueryParams;
    request?: shared.ServerTlsPolicyInput;
    security: NetworksecurityProjectsLocationsServerTlsPoliciesPatchSecurity;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
