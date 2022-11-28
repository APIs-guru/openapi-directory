import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ForgotPasswordRequests extends SpeakeasyBase {
    forgotPasswordDto?: shared.ForgotPasswordDto;
    forgotPasswordDto1?: shared.ForgotPasswordDto;
    forgotPasswordDto2?: shared.ForgotPasswordDto;
}
export declare class ForgotPasswordRequest extends SpeakeasyBase {
    request: ForgotPasswordRequests;
}
export declare class ForgotPasswordResponse extends SpeakeasyBase {
    contentType: string;
    forgotPasswordResult?: shared.ForgotPasswordResult;
    statusCode: number;
}
