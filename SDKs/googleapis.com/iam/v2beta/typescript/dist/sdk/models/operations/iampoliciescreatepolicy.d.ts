import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamPoliciesCreatePolicyPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamPoliciesCreatePolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    policyId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamPoliciesCreatePolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamPoliciesCreatePolicyRequest extends SpeakeasyBase {
    pathParams: IamPoliciesCreatePolicyPathParams;
    queryParams: IamPoliciesCreatePolicyQueryParams;
    request?: shared.GoogleIamV2betaPolicy;
    security: IamPoliciesCreatePolicySecurity;
}
export declare class IamPoliciesCreatePolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
