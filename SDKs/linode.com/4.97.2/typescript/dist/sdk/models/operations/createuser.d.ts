import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUserSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateUserDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateUserRequest extends SpeakeasyBase {
    request?: any;
    security: CreateUserSecurity;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
    createUserDefaultApplicationJsonObject?: CreateUserDefaultApplicationJson;
}
