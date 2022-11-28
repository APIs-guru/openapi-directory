import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateObjectStorageBucketAccessServerList: readonly ["https://api.linode.com/v4"];
export declare class UpdateObjectStorageBucketAccessPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class UpdateObjectStorageBucketAccessSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateObjectStorageBucketAccessDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateObjectStorageBucketAccessRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateObjectStorageBucketAccessPathParams;
    request?: any;
    security: UpdateObjectStorageBucketAccessSecurity;
}
export declare class UpdateObjectStorageBucketAccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateObjectStorageBucketAccess200ApplicationJsonObject?: Map<string, any>;
    updateObjectStorageBucketAccessDefaultApplicationJsonObject?: UpdateObjectStorageBucketAccessDefaultApplicationJson;
}
