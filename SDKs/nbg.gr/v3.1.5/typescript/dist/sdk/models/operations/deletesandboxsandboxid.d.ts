import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSandboxSandboxIdPathParams extends SpeakeasyBase {
    sandboxId: string;
}
export declare class DeleteSandboxSandboxIdSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class DeleteSandboxSandboxIdRequest extends SpeakeasyBase {
    pathParams: DeleteSandboxSandboxIdPathParams;
    security: DeleteSandboxSandboxIdSecurity;
}
export declare class DeleteSandboxSandboxIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
