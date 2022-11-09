import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageBucketAccessControlsInsertPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketAccessControlsInsertQueryParams extends SpeakeasyBase {
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
export declare class StorageBucketAccessControlsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsInsertSecurity extends SpeakeasyBase {
    option1?: StorageBucketAccessControlsInsertSecurityOption1;
    option2?: StorageBucketAccessControlsInsertSecurityOption2;
}
export declare class StorageBucketAccessControlsInsertRequest extends SpeakeasyBase {
    pathParams: StorageBucketAccessControlsInsertPathParams;
    queryParams: StorageBucketAccessControlsInsertQueryParams;
    request?: shared.BucketAccessControl;
    security: StorageBucketAccessControlsInsertSecurity;
}
export declare class StorageBucketAccessControlsInsertResponse extends SpeakeasyBase {
    bucketAccessControl?: shared.BucketAccessControl;
    contentType: string;
    statusCode: number;
}
