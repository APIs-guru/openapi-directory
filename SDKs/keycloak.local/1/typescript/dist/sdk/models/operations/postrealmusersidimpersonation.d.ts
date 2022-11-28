import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRealmUsersIdImpersonationPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmUsersIdImpersonationRequest extends SpeakeasyBase {
    pathParams: PostRealmUsersIdImpersonationPathParams;
}
export declare class PostRealmUsersIdImpersonationResponse extends SpeakeasyBase {
    contentType: string;
    postRealmUsersIdImpersonation2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
