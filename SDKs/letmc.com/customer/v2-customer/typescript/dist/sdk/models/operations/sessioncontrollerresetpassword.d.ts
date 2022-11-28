import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerResetPasswordPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerResetPasswordQueryParams extends SpeakeasyBase {
    email: string;
}
export declare class SessionControllerResetPasswordRequest extends SpeakeasyBase {
    pathParams: SessionControllerResetPasswordPathParams;
    queryParams: SessionControllerResetPasswordQueryParams;
}
export declare class SessionControllerResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
