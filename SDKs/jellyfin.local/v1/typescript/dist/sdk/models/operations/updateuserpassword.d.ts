import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserPasswordRequests extends SpeakeasyBase {
    updateUserPassword?: shared.UpdateUserPassword;
    updateUserPassword1?: shared.UpdateUserPassword;
    updateUserPassword2?: shared.UpdateUserPassword;
}
export declare class UpdateUserPasswordSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateUserPasswordRequest extends SpeakeasyBase {
    pathParams: UpdateUserPasswordPathParams;
    request: UpdateUserPasswordRequests;
    security: UpdateUserPasswordSecurity;
}
export declare class UpdateUserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
