import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetUserSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetUserDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
    security: GetUserSecurity;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
    getUserDefaultApplicationJsonObject?: GetUserDefaultApplicationJson;
}
