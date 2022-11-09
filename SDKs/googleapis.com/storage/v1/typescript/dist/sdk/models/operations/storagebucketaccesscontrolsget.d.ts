import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageBucketAccessControlsGetPathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageBucketAccessControlsGetQueryParams extends SpeakeasyBase {
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
export declare class StorageBucketAccessControlsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsGetSecurity extends SpeakeasyBase {
    option1?: StorageBucketAccessControlsGetSecurityOption1;
    option2?: StorageBucketAccessControlsGetSecurityOption2;
}
export declare class StorageBucketAccessControlsGetRequest extends SpeakeasyBase {
    pathParams: StorageBucketAccessControlsGetPathParams;
    queryParams: StorageBucketAccessControlsGetQueryParams;
    security: StorageBucketAccessControlsGetSecurity;
}
export declare class StorageBucketAccessControlsGetResponse extends SpeakeasyBase {
    bucketAccessControl?: shared.BucketAccessControl;
    contentType: string;
    statusCode: number;
}
