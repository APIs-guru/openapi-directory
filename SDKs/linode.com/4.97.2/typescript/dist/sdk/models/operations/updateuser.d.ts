import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UpdateUserSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateUserDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    request?: shared.UserInput;
    security: UpdateUserSecurity;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
    updateUserDefaultApplicationJsonObject?: UpdateUserDefaultApplicationJson;
}
