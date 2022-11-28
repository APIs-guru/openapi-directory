import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class DeleteUserSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteUserDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    pathParams: DeleteUserPathParams;
    security: DeleteUserSecurity;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteUser200ApplicationJsonObject?: Map<string, any>;
    deleteUserDefaultApplicationJsonObject?: DeleteUserDefaultApplicationJson;
}
