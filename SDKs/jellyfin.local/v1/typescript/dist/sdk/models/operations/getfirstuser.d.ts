import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFirstUserSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetFirstUserRequest extends SpeakeasyBase {
    security: GetFirstUserSecurity;
}
export declare class GetFirstUserResponse extends SpeakeasyBase {
    contentType: string;
    startupUserDto?: shared.StartupUserDto;
    statusCode: number;
}
