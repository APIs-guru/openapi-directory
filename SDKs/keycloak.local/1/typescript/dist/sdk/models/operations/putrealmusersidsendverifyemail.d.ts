import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutRealmUsersIdSendVerifyEmailPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmUsersIdSendVerifyEmailQueryParams extends SpeakeasyBase {
    clientId?: string;
    redirectUri?: string;
}
export declare class PutRealmUsersIdSendVerifyEmailRequest extends SpeakeasyBase {
    pathParams: PutRealmUsersIdSendVerifyEmailPathParams;
    queryParams: PutRealmUsersIdSendVerifyEmailQueryParams;
}
export declare class PutRealmUsersIdSendVerifyEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
