import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsLockRetentionPolicyPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketsLockRetentionPolicyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsLockRetentionPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsLockRetentionPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsLockRetentionPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsLockRetentionPolicySecurity extends SpeakeasyBase {
    option1?: StorageBucketsLockRetentionPolicySecurityOption1;
    option2?: StorageBucketsLockRetentionPolicySecurityOption2;
    option3?: StorageBucketsLockRetentionPolicySecurityOption3;
}
export declare class StorageBucketsLockRetentionPolicyRequest extends SpeakeasyBase {
    pathParams: StorageBucketsLockRetentionPolicyPathParams;
    queryParams: StorageBucketsLockRetentionPolicyQueryParams;
    security: StorageBucketsLockRetentionPolicySecurity;
}
export declare class StorageBucketsLockRetentionPolicyResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
