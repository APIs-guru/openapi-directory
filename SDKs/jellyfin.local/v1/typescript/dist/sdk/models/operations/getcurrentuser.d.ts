import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCurrentUserSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetCurrentUserRequest extends SpeakeasyBase {
    security: GetCurrentUserSecurity;
}
export declare class GetCurrentUserResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    userDto?: shared.UserDto;
}
