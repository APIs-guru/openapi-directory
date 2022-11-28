import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUserFromSessionPathParams extends SpeakeasyBase {
    sessionId: string;
    userId: string;
}
export declare class RemoveUserFromSessionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RemoveUserFromSessionRequest extends SpeakeasyBase {
    pathParams: RemoveUserFromSessionPathParams;
    security: RemoveUserFromSessionSecurity;
}
export declare class RemoveUserFromSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
