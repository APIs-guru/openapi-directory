import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostPersonLoginPathParams extends SpeakeasyBase {
    login: string;
}
export declare enum PostPersonLoginCmdEnum {
    ChangePassword = "change_password",
    Lock = "lock",
    Delete = "delete"
}
export declare class PostPersonLoginQueryParams extends SpeakeasyBase {
    cmd: PostPersonLoginCmdEnum;
}
export declare class PostPersonLoginSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostPersonLoginRequest extends SpeakeasyBase {
    pathParams: PostPersonLoginPathParams;
    queryParams: PostPersonLoginQueryParams;
    request?: string;
    security: PostPersonLoginSecurity;
}
export declare class PostPersonLoginResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
