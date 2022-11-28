import { SpeakeasyBase } from "../../../internal/utils";
export declare class ForgotPasswordOneTimeCodePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ForgotPasswordOneTimeCodeQueryParams extends SpeakeasyBase {
    sendEmail?: string;
}
export declare class ForgotPasswordOneTimeCodeRequest extends SpeakeasyBase {
    pathParams: ForgotPasswordOneTimeCodePathParams;
    queryParams: ForgotPasswordOneTimeCodeQueryParams;
    request?: Uint8Array;
}
export declare class ForgotPasswordOneTimeCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
