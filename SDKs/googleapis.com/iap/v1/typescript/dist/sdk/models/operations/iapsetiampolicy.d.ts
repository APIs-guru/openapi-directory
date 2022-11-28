import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IapSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IapSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IapSetIamPolicyPathParams;
    queryParams: IapSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: IapSetIamPolicySecurity;
}
export declare class IapSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
