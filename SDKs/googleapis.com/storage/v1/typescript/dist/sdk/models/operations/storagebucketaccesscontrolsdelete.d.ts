import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketAccessControlsDeletePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageBucketAccessControlsDeleteQueryParams extends SpeakeasyBase {
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
export declare class StorageBucketAccessControlsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsDeleteSecurity extends SpeakeasyBase {
    option1?: StorageBucketAccessControlsDeleteSecurityOption1;
    option2?: StorageBucketAccessControlsDeleteSecurityOption2;
}
export declare class StorageBucketAccessControlsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageBucketAccessControlsDeletePathParams;
    queryParams: StorageBucketAccessControlsDeleteQueryParams;
    security: StorageBucketAccessControlsDeleteSecurity;
}
export declare class StorageBucketAccessControlsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
