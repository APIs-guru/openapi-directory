import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateUserSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    request: shared.UserInput;
    security: UpdateUserSecurity;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
