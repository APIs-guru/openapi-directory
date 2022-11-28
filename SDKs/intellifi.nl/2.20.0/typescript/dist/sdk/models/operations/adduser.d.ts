import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class AddUserRequest extends SpeakeasyBase {
    request: shared.UserInput;
    security: AddUserSecurity;
}
export declare class AddUserResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
