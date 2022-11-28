import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsCopyPathParams extends SpeakeasyBase {
    destinationBucket: string;
    destinationObject: string;
    sourceBucket: string;
    sourceObject: string;
}
export declare enum StorageObjectsCopyDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageObjectsCopyProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsCopyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    destinationKmsKeyName?: string;
    destinationPredefinedAcl?: StorageObjectsCopyDestinationPredefinedAclEnum;
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
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: StorageObjectsCopyProjectionEnum;
    quotaUser?: string;
    sourceGeneration?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsCopySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsCopySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsCopySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsCopySecurity extends SpeakeasyBase {
    option1?: StorageObjectsCopySecurityOption1;
    option2?: StorageObjectsCopySecurityOption2;
    option3?: StorageObjectsCopySecurityOption3;
}
export declare class StorageObjectsCopyRequest extends SpeakeasyBase {
    pathParams: StorageObjectsCopyPathParams;
    queryParams: StorageObjectsCopyQueryParams;
    request?: shared.Object;
    security: StorageObjectsCopySecurity;
}
export declare class StorageObjectsCopyResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
