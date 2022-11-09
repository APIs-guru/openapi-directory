import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageBucketsSetIamPolicyPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketsSetIamPolicyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: StorageBucketsSetIamPolicySecurityOption1;
    option2?: StorageBucketsSetIamPolicySecurityOption2;
}
export declare class StorageBucketsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: StorageBucketsSetIamPolicyPathParams;
    queryParams: StorageBucketsSetIamPolicyQueryParams;
    request?: shared.Policy;
    security: StorageBucketsSetIamPolicySecurity;
}
export declare class StorageBucketsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
