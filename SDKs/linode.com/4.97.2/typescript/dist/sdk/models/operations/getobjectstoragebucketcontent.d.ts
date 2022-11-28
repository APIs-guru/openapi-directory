import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageBucketContentServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageBucketContentPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class GetObjectStorageBucketContentQueryParams extends SpeakeasyBase {
    delimiter?: string;
    marker?: string;
    pageSize?: number;
    prefix?: string;
}
export declare class GetObjectStorageBucketContentSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageBucketContentDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageBucketContentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetObjectStorageBucketContentPathParams;
    queryParams: GetObjectStorageBucketContentQueryParams;
    security: GetObjectStorageBucketContentSecurity;
}
export declare class GetObjectStorageBucketContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjectStorageBucketContent200ApplicationJsonAny?: any;
    getObjectStorageBucketContentDefaultApplicationJsonObject?: GetObjectStorageBucketContentDefaultApplicationJson;
}
