import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecutePayPalPaymentSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ExecutePayPalPaymentDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ExecutePayPalPaymentRequest extends SpeakeasyBase {
    request: shared.PayPalExecute;
    security: ExecutePayPalPaymentSecurity;
}
export declare class ExecutePayPalPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    executePayPalPayment200ApplicationJsonObject?: Map<string, any>;
    executePayPalPaymentDefaultApplicationJsonObject?: ExecutePayPalPaymentDefaultApplicationJson;
}
