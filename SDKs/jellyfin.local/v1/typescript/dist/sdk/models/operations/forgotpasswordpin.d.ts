import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ForgotPasswordPinRequests extends SpeakeasyBase {
    string?: string;
    string1?: string;
    string2?: string;
}
export declare class ForgotPasswordPinRequest extends SpeakeasyBase {
    request?: ForgotPasswordPinRequests;
}
export declare class ForgotPasswordPinResponse extends SpeakeasyBase {
    contentType: string;
    pinRedeemResult?: shared.PinRedeemResult;
    statusCode: number;
}
