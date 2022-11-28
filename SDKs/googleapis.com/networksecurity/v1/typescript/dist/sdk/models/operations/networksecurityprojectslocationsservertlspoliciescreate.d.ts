import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serverTlsPolicyId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsServerTlsPoliciesCreatePathParams;
    queryParams: NetworksecurityProjectsLocationsServerTlsPoliciesCreateQueryParams;
    request?: shared.ServerTlsPolicyInput;
    security: NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
