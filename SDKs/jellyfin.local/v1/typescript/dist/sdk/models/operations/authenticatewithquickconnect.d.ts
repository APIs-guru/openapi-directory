import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticateWithQuickConnectRequests extends SpeakeasyBase {
    quickConnectDto?: shared.QuickConnectDto;
    quickConnectDto1?: shared.QuickConnectDto;
    quickConnectDto2?: shared.QuickConnectDto;
}
export declare class AuthenticateWithQuickConnectRequest extends SpeakeasyBase {
    request: AuthenticateWithQuickConnectRequests;
}
export declare class AuthenticateWithQuickConnectResponse extends SpeakeasyBase {
    authenticationResult?: shared.AuthenticationResult;
    contentType: string;
    statusCode: number;
}
