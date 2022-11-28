import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ModifyObjectStorageBucketAccessServerList: readonly ["https://api.linode.com/v4"];
export declare class ModifyObjectStorageBucketAccessPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class ModifyObjectStorageBucketAccessSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ModifyObjectStorageBucketAccessDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ModifyObjectStorageBucketAccessRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ModifyObjectStorageBucketAccessPathParams;
    request?: any;
    security: ModifyObjectStorageBucketAccessSecurity;
}
export declare class ModifyObjectStorageBucketAccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    modifyObjectStorageBucketAccess200ApplicationJsonObject?: Map<string, any>;
    modifyObjectStorageBucketAccessDefaultApplicationJsonObject?: ModifyObjectStorageBucketAccessDefaultApplicationJson;
}
