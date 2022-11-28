import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ViewObjectStorageBucketAclServerList: readonly ["https://api.linode.com/v4"];
export declare class ViewObjectStorageBucketAclPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class ViewObjectStorageBucketAclQueryParams extends SpeakeasyBase {
    name: string;
}
export declare class ViewObjectStorageBucketAclSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare enum ViewObjectStorageBucketAcl200ApplicationJsonAclEnum {
    Private = "private",
    PublicRead = "public-read",
    AuthenticatedRead = "authenticated-read",
    PublicReadWrite = "public-read-write",
    Custom = "custom"
}
export declare class ViewObjectStorageBucketAcl200ApplicationJson extends SpeakeasyBase {
    acl?: ViewObjectStorageBucketAcl200ApplicationJsonAclEnum;
    aclXml?: string;
}
export declare class ViewObjectStorageBucketAclDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ViewObjectStorageBucketAclRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ViewObjectStorageBucketAclPathParams;
    queryParams: ViewObjectStorageBucketAclQueryParams;
    security: ViewObjectStorageBucketAclSecurity;
}
export declare class ViewObjectStorageBucketAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    viewObjectStorageBucketAcl200ApplicationJsonObject?: ViewObjectStorageBucketAcl200ApplicationJson;
    viewObjectStorageBucketAclDefaultApplicationJsonObject?: ViewObjectStorageBucketAclDefaultApplicationJson;
}
