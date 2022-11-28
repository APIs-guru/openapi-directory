import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientTlsPolicyId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams;
    queryParams: NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams;
    request?: shared.ClientTlsPolicyInput;
    security: NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
