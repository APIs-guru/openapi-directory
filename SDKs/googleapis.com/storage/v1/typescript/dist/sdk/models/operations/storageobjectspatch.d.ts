import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageObjectsPatchPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare enum StorageObjectsPatchPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageObjectsPatchProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    predefinedAcl?: StorageObjectsPatchPredefinedAclEnum;
    prettyPrint?: boolean;
    projection?: StorageObjectsPatchProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsPatchSecurity extends SpeakeasyBase {
    option1?: StorageObjectsPatchSecurityOption1;
    option2?: StorageObjectsPatchSecurityOption2;
}
export declare class StorageObjectsPatchRequest extends SpeakeasyBase {
    pathParams: StorageObjectsPatchPathParams;
    queryParams: StorageObjectsPatchQueryParams;
    request?: shared.Object;
    security: StorageObjectsPatchSecurity;
}
export declare class StorageObjectsPatchResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
