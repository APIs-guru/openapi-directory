import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserRequestsInput extends SpeakeasyBase {
    userDto?: shared.UserDtoInput;
    userDto1?: shared.UserDtoInput;
    userDto2?: shared.UserDtoInput;
}
export declare class UpdateUserSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    request: UpdateUserRequestsInput;
    security: UpdateUserSecurity;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
