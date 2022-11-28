import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResetPasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ResetPasswordQueryParams extends SpeakeasyBase {
    sendEmail?: string;
}
export declare class ResetPasswordRequest extends SpeakeasyBase {
    pathParams: ResetPasswordPathParams;
    queryParams: ResetPasswordQueryParams;
    request?: Uint8Array;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
