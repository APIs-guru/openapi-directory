import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketAccessControlsPatchPathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageBucketAccessControlsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageBucketAccessControlsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsPatchRequest extends SpeakeasyBase {
    pathParams: StorageBucketAccessControlsPatchPathParams;
    queryParams: StorageBucketAccessControlsPatchQueryParams;
    request?: shared.BucketAccessControl;
    security: StorageBucketAccessControlsPatchSecurity;
}
export declare class StorageBucketAccessControlsPatchResponse extends SpeakeasyBase {
    bucketAccessControl?: shared.BucketAccessControl;
    contentType: string;
    statusCode: number;
}
