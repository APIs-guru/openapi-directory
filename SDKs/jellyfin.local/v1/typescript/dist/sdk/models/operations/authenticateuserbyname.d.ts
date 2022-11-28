import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticateUserByNameRequests extends SpeakeasyBase {
    authenticateUserByName?: shared.AuthenticateUserByName;
    authenticateUserByName1?: shared.AuthenticateUserByName;
    authenticateUserByName2?: shared.AuthenticateUserByName;
}
export declare class AuthenticateUserByNameRequest extends SpeakeasyBase {
    request: AuthenticateUserByNameRequests;
}
export declare class AuthenticateUserByNameResponse extends SpeakeasyBase {
    authenticationResult?: shared.AuthenticationResult;
    contentType: string;
    statusCode: number;
}
