import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketAccessControlsListPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketAccessControlsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageBucketAccessControlsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketAccessControlsListRequest extends SpeakeasyBase {
    pathParams: StorageBucketAccessControlsListPathParams;
    queryParams: StorageBucketAccessControlsListQueryParams;
    security: StorageBucketAccessControlsListSecurity;
}
export declare class StorageBucketAccessControlsListResponse extends SpeakeasyBase {
    bucketAccessControls?: shared.BucketAccessControls;
    contentType: string;
    statusCode: number;
}
