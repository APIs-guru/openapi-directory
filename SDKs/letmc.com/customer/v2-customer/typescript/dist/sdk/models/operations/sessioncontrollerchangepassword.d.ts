import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerChangePasswordPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerChangePasswordQueryParams extends SpeakeasyBase {
    newPassword: string;
    oldPassword: string;
    token: string;
}
export declare class SessionControllerChangePasswordRequest extends SpeakeasyBase {
    pathParams: SessionControllerChangePasswordPathParams;
    queryParams: SessionControllerChangePasswordQueryParams;
}
export declare class SessionControllerChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
