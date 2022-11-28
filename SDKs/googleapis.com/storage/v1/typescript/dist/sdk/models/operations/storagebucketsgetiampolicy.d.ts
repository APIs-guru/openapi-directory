import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsGetIamPolicyPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketsGetIamPolicyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: StorageBucketsGetIamPolicySecurityOption1;
    option2?: StorageBucketsGetIamPolicySecurityOption2;
}
export declare class StorageBucketsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: StorageBucketsGetIamPolicyPathParams;
    queryParams: StorageBucketsGetIamPolicyQueryParams;
    security: StorageBucketsGetIamPolicySecurity;
}
export declare class StorageBucketsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
