import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStartupUserRequests extends SpeakeasyBase {
    startupUserDto?: shared.StartupUserDto;
    startupUserDto1?: shared.StartupUserDto;
    startupUserDto2?: shared.StartupUserDto;
}
export declare class UpdateStartupUserSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateStartupUserRequest extends SpeakeasyBase {
    request?: UpdateStartupUserRequests;
    security: UpdateStartupUserSecurity;
}
export declare class UpdateStartupUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
