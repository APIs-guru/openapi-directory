import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesNetworksDefineNetworkPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesNetworksDefineNetworkQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesNetworksDefineNetworkPathParams;
    queryParams: ChromepolicyCustomersPoliciesNetworksDefineNetworkQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1DefineNetworkRequest;
    security: ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity;
}
export declare class ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1DefineNetworkResponse?: shared.GoogleChromePolicyVersionsV1DefineNetworkResponse;
    statusCode: number;
}
