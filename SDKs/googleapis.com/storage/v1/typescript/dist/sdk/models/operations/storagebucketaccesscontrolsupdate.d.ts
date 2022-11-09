import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageBucketAccessControlsUpdatePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageBucketAccessControlsUpdateQueryParams extends SpeakeasyBase {
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
export declare class StorageBucketAccessControlsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsUpdateSecurity extends SpeakeasyBase {
    option1?: StorageBucketAccessControlsUpdateSecurityOption1;
    option2?: StorageBucketAccessControlsUpdateSecurityOption2;
}
export declare class StorageBucketAccessControlsUpdateRequest extends SpeakeasyBase {
    pathParams: StorageBucketAccessControlsUpdatePathParams;
    queryParams: StorageBucketAccessControlsUpdateQueryParams;
    request?: shared.BucketAccessControl;
    security: StorageBucketAccessControlsUpdateSecurity;
}
export declare class StorageBucketAccessControlsUpdateResponse extends SpeakeasyBase {
    bucketAccessControl?: shared.BucketAccessControl;
    contentType: string;
    statusCode: number;
}
