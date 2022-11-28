import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageBucketsServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageBucketsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageBuckets200ApplicationJson extends SpeakeasyBase {
    data?: shared.ObjectStorageBucket[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetObjectStorageBucketsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageBucketsRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: GetObjectStorageBucketsSecurity;
}
export declare class GetObjectStorageBucketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjectStorageBuckets200ApplicationJsonObject?: GetObjectStorageBuckets200ApplicationJson;
    getObjectStorageBucketsDefaultApplicationJsonObject?: GetObjectStorageBucketsDefaultApplicationJson;
}
