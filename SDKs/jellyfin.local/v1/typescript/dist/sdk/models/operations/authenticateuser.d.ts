import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticateUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class AuthenticateUserQueryParams extends SpeakeasyBase {
    password?: string;
    pw: string;
}
export declare class AuthenticateUserRequest extends SpeakeasyBase {
    pathParams: AuthenticateUserPathParams;
    queryParams: AuthenticateUserQueryParams;
}
export declare class AuthenticateUserResponse extends SpeakeasyBase {
    authenticationResult?: shared.AuthenticationResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
