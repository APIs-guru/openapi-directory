import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserToSessionPathParams extends SpeakeasyBase {
    sessionId: string;
    userId: string;
}
export declare class AddUserToSessionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddUserToSessionRequest extends SpeakeasyBase {
    pathParams: AddUserToSessionPathParams;
    security: AddUserToSessionSecurity;
}
export declare class AddUserToSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
