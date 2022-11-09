import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageObjectsInsertPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageObjectsInsertPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageObjectsInsertProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    contentEncoding?: string;
    fields?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    kmsKeyName?: string;
    name?: string;
    oauthToken?: string;
    predefinedAcl?: StorageObjectsInsertPredefinedAclEnum;
    prettyPrint?: boolean;
    projection?: StorageObjectsInsertProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsInsertSecurity extends SpeakeasyBase {
    option1?: StorageObjectsInsertSecurityOption1;
    option2?: StorageObjectsInsertSecurityOption2;
    option3?: StorageObjectsInsertSecurityOption3;
}
export declare class StorageObjectsInsertRequest extends SpeakeasyBase {
    pathParams: StorageObjectsInsertPathParams;
    queryParams: StorageObjectsInsertQueryParams;
    request?: Uint8Array;
    security: StorageObjectsInsertSecurity;
}
export declare class StorageObjectsInsertResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
