import { SpeakeasyBase } from "../../../internal/utils";
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
    userIp?: string;
}
export declare class StorageBucketAccessControlsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
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
