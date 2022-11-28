import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserByIdPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserByIdSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetUserByIdRequest extends SpeakeasyBase {
    pathParams: GetUserByIdPathParams;
    security: GetUserByIdSecurity;
}
export declare class GetUserByIdResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    userDto?: shared.UserDto;
}
