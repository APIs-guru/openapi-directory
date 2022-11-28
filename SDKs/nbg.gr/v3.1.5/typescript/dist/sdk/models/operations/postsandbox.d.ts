import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSandboxRequests extends SpeakeasyBase {
    sandboxRequest?: shared.SandboxRequest;
    sandboxRequest1?: shared.SandboxRequest;
}
export declare class PostSandboxSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class PostSandboxRequest extends SpeakeasyBase {
    request?: PostSandboxRequests;
    security: PostSandboxSecurity;
}
export declare class PostSandboxResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    sandbox?: shared.Sandbox;
    statusCode: number;
}
