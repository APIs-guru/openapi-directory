import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserEasyPasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserEasyPasswordRequests extends SpeakeasyBase {
    updateUserEasyPassword?: shared.UpdateUserEasyPassword;
    updateUserEasyPassword1?: shared.UpdateUserEasyPassword;
    updateUserEasyPassword2?: shared.UpdateUserEasyPassword;
}
export declare class UpdateUserEasyPasswordSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateUserEasyPasswordRequest extends SpeakeasyBase {
    pathParams: UpdateUserEasyPasswordPathParams;
    request: UpdateUserEasyPasswordRequests;
    security: UpdateUserEasyPasswordSecurity;
}
export declare class UpdateUserEasyPasswordResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
