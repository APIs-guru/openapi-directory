import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageBucketinClusterServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageBucketinClusterPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetObjectStorageBucketinClusterSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageBucketinCluster200ApplicationJson extends SpeakeasyBase {
    data?: shared.ObjectStorageBucket[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetObjectStorageBucketinClusterDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageBucketinClusterRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetObjectStorageBucketinClusterPathParams;
    security: GetObjectStorageBucketinClusterSecurity;
}
export declare class GetObjectStorageBucketinClusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjectStorageBucketinCluster200ApplicationJsonObject?: GetObjectStorageBucketinCluster200ApplicationJson;
    getObjectStorageBucketinClusterDefaultApplicationJsonObject?: GetObjectStorageBucketinClusterDefaultApplicationJson;
}
