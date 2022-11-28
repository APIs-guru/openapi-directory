import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsRewritePathParams extends SpeakeasyBase {
    destinationBucket: string;
    destinationObject: string;
    sourceBucket: string;
    sourceObject: string;
}
export declare enum StorageObjectsRewriteDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageObjectsRewriteProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsRewriteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    destinationKmsKeyName?: string;
    destinationPredefinedAcl?: StorageObjectsRewriteDestinationPredefinedAclEnum;
    fields?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    ifSourceGenerationMatch?: string;
    ifSourceGenerationNotMatch?: string;
    ifSourceMetagenerationMatch?: string;
    ifSourceMetagenerationNotMatch?: string;
    key?: string;
    maxBytesRewrittenPerCall?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: StorageObjectsRewriteProjectionEnum;
    quotaUser?: string;
    rewriteToken?: string;
    sourceGeneration?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsRewriteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsRewriteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsRewriteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsRewriteSecurity extends SpeakeasyBase {
    option1?: StorageObjectsRewriteSecurityOption1;
    option2?: StorageObjectsRewriteSecurityOption2;
    option3?: StorageObjectsRewriteSecurityOption3;
}
export declare class StorageObjectsRewriteRequest extends SpeakeasyBase {
    pathParams: StorageObjectsRewritePathParams;
    queryParams: StorageObjectsRewriteQueryParams;
    request?: shared.Object;
    security: StorageObjectsRewriteSecurity;
}
export declare class StorageObjectsRewriteResponse extends SpeakeasyBase {
    contentType: string;
    rewriteResponse?: shared.RewriteResponse;
    statusCode: number;
}
