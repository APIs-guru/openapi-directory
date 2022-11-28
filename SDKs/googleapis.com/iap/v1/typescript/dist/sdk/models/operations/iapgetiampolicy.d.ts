import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IapGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IapGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IapGetIamPolicyPathParams;
    queryParams: IapGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: IapGetIamPolicySecurity;
}
export declare class IapGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
