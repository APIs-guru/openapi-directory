import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUserByNameRequests extends SpeakeasyBase {
    createUserByName?: shared.CreateUserByName;
    createUserByName1?: shared.CreateUserByName;
    createUserByName2?: shared.CreateUserByName;
}
export declare class CreateUserByNameSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateUserByNameRequest extends SpeakeasyBase {
    request: CreateUserByNameRequests;
    security: CreateUserByNameSecurity;
}
export declare class CreateUserByNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userDto?: shared.UserDto;
}
