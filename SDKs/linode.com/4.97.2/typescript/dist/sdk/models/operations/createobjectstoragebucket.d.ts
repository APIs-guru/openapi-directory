import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateObjectStorageBucketServerList: readonly ["https://api.linode.com/v4"];
export declare enum CreateObjectStorageBucketRequestBodyAclEnum {
    Private = "private",
    PublicRead = "public-read",
    AuthenticatedRead = "authenticated-read",
    PublicReadWrite = "public-read-write"
}
export declare class CreateObjectStorageBucketRequestBody extends SpeakeasyBase {
    acl?: CreateObjectStorageBucketRequestBodyAclEnum;
    cluster: string;
    corsEnabled?: boolean;
    label: string;
}
export declare class CreateObjectStorageBucketSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateObjectStorageBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateObjectStorageBucketRequestBody;
    security: CreateObjectStorageBucketSecurity;
}
export declare class CreateObjectStorageBucketResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageBucket?: shared.ObjectStorageBucket;
    statusCode: number;
    createObjectStorageBucketDefaultApplicationJsonObject?: CreateObjectStorageBucketDefaultApplicationJson;
}
