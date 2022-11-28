import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteObjectStorageBucketServerList: readonly ["https://api.linode.com/v4"];
export declare class DeleteObjectStorageBucketPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class DeleteObjectStorageBucketSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteObjectStorageBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteObjectStorageBucketPathParams;
    security: DeleteObjectStorageBucketSecurity;
}
export declare class DeleteObjectStorageBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteObjectStorageBucket200ApplicationJsonObject?: Map<string, any>;
    deleteObjectStorageBucketDefaultApplicationJsonObject?: DeleteObjectStorageBucketDefaultApplicationJson;
}
