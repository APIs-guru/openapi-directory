import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserEmailPermissionsPermissionNamePathParams extends SpeakeasyBase {
    permissionName: shared.PermissionNameEnum;
    userEmail: string;
}
export declare class PostUsersUserEmailPermissionsPermissionNameRequest extends SpeakeasyBase {
    pathParams: PostUsersUserEmailPermissionsPermissionNamePathParams;
}
export declare class PostUsersUserEmailPermissionsPermissionNameResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
