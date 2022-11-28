import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsUpdatePathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare enum StorageObjectsUpdatePredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare enum StorageObjectsUpdateProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    predefinedAcl?: StorageObjectsUpdatePredefinedAclEnum;
    prettyPrint?: boolean;
    projection?: StorageObjectsUpdateProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsUpdateSecurity extends SpeakeasyBase {
    option1?: StorageObjectsUpdateSecurityOption1;
    option2?: StorageObjectsUpdateSecurityOption2;
}
export declare class StorageObjectsUpdateRequest extends SpeakeasyBase {
    pathParams: StorageObjectsUpdatePathParams;
    queryParams: StorageObjectsUpdateQueryParams;
    request?: shared.Object;
    security: StorageObjectsUpdateSecurity;
}
export declare class StorageObjectsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
