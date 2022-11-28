import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams;
    queryParams: ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1RemoveNetworkRequest;
    security: ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity;
}
export declare class ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1RemoveNetworkResponse?: Map<string, any>;
    statusCode: number;
}
