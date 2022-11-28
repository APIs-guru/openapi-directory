import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageBucketServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageBucketPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class GetObjectStorageBucketSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetObjectStorageBucketPathParams;
    security: GetObjectStorageBucketSecurity;
}
export declare class GetObjectStorageBucketResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageBucket?: shared.ObjectStorageBucket;
    statusCode: number;
    getObjectStorageBucketDefaultApplicationJsonObject?: GetObjectStorageBucketDefaultApplicationJson;
}
