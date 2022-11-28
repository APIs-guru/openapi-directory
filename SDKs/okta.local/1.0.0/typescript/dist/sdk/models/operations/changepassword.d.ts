import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangePasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ChangePasswordRequestBodyNewPassword extends SpeakeasyBase {
    value?: string;
}
export declare class ChangePasswordRequestBodyOldPassword extends SpeakeasyBase {
    value?: string;
}
export declare class ChangePasswordRequestBody extends SpeakeasyBase {
    newPassword?: ChangePasswordRequestBodyNewPassword;
    oldPassword?: ChangePasswordRequestBodyOldPassword;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    pathParams: ChangePasswordPathParams;
    request?: ChangePasswordRequestBody;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
