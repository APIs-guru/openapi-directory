import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsUpdatePathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageBucketsUpdatePredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead",
    PublicReadWrite = "publicReadWrite"
}
export declare enum StorageBucketsUpdatePredefinedDefaultObjectAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageBucketsUpdateProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    predefinedAcl?: StorageBucketsUpdatePredefinedAclEnum;
    predefinedDefaultObjectAcl?: StorageBucketsUpdatePredefinedDefaultObjectAclEnum;
    prettyPrint?: boolean;
    projection?: StorageBucketsUpdateProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsUpdateSecurity extends SpeakeasyBase {
    option1?: StorageBucketsUpdateSecurityOption1;
    option2?: StorageBucketsUpdateSecurityOption2;
}
export declare class StorageBucketsUpdateRequest extends SpeakeasyBase {
    pathParams: StorageBucketsUpdatePathParams;
    queryParams: StorageBucketsUpdateQueryParams;
    request?: shared.Bucket;
    security: StorageBucketsUpdateSecurity;
}
export declare class StorageBucketsUpdateResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
