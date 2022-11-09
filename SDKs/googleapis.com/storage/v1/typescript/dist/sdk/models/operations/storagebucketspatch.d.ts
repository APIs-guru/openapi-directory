import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageBucketsPatchPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageBucketsPatchPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead",
    PublicReadWrite = "publicReadWrite"
}
export declare enum StorageBucketsPatchPredefinedDefaultObjectAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageBucketsPatchProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    predefinedAcl?: StorageBucketsPatchPredefinedAclEnum;
    predefinedDefaultObjectAcl?: StorageBucketsPatchPredefinedDefaultObjectAclEnum;
    prettyPrint?: boolean;
    projection?: StorageBucketsPatchProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsPatchSecurity extends SpeakeasyBase {
    option1?: StorageBucketsPatchSecurityOption1;
    option2?: StorageBucketsPatchSecurityOption2;
}
export declare class StorageBucketsPatchRequest extends SpeakeasyBase {
    pathParams: StorageBucketsPatchPathParams;
    queryParams: StorageBucketsPatchQueryParams;
    request?: shared.Bucket;
    security: StorageBucketsPatchSecurity;
}
export declare class StorageBucketsPatchResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
