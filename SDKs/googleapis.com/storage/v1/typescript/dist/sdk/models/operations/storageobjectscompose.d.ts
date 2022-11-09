import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageObjectsComposePathParams extends SpeakeasyBase {
    destinationBucket: string;
    destinationObject: string;
}
export declare enum StorageObjectsComposeDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
export declare class StorageObjectsComposeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    destinationPredefinedAcl?: StorageObjectsComposeDestinationPredefinedAclEnum;
    fields?: string;
    ifGenerationMatch?: string;
    ifMetagenerationMatch?: string;
    key?: string;
    kmsKeyName?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsComposeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsComposeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsComposeSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsComposeSecurity extends SpeakeasyBase {
    option1?: StorageObjectsComposeSecurityOption1;
    option2?: StorageObjectsComposeSecurityOption2;
    option3?: StorageObjectsComposeSecurityOption3;
}
export declare class StorageObjectsComposeRequest extends SpeakeasyBase {
    pathParams: StorageObjectsComposePathParams;
    queryParams: StorageObjectsComposeQueryParams;
    request?: shared.ComposeRequest;
    security: StorageObjectsComposeSecurity;
}
export declare class StorageObjectsComposeResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
