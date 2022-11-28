import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSandboxRequests extends SpeakeasyBase {
    sandbox?: shared.Sandbox;
    sandbox1?: shared.Sandbox;
}
export declare class PutSandboxSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class PutSandboxRequest extends SpeakeasyBase {
    request?: PutSandboxRequests;
    security: PutSandboxSecurity;
}
export declare class PutSandboxResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
