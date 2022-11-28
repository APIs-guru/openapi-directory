import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateObjectStorageBucketAclServerList: readonly ["https://api.linode.com/v4"];
export declare class UpdateObjectStorageBucketAclPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class UpdateObjectStorageBucketAclSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare enum UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum {
    Private = "private",
    PublicRead = "public-read",
    AuthenticatedRead = "authenticated-read",
    PublicReadWrite = "public-read-write",
    Custom = "custom"
}
export declare class UpdateObjectStorageBucketAcl200ApplicationJson extends SpeakeasyBase {
    acl?: UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum;
    aclXml?: string;
}
export declare class UpdateObjectStorageBucketAclDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateObjectStorageBucketAclRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateObjectStorageBucketAclPathParams;
    request?: any;
    security: UpdateObjectStorageBucketAclSecurity;
}
export declare class UpdateObjectStorageBucketAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateObjectStorageBucketAcl200ApplicationJsonObject?: UpdateObjectStorageBucketAcl200ApplicationJson;
    updateObjectStorageBucketAclDefaultApplicationJsonObject?: UpdateObjectStorageBucketAclDefaultApplicationJson;
}
