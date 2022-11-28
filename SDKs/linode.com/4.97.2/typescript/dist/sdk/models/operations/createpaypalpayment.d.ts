import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePayPalPaymentSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreatePayPalPayment200ApplicationJson extends SpeakeasyBase {
    checkoutToken?: string;
    paymentId?: string;
}
export declare class CreatePayPalPaymentDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreatePayPalPaymentRequest extends SpeakeasyBase {
    request: shared.PayPal;
    security: CreatePayPalPaymentSecurity;
}
export declare class CreatePayPalPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPayPalPayment200ApplicationJsonObject?: CreatePayPalPayment200ApplicationJson;
    createPayPalPaymentDefaultApplicationJsonObject?: CreatePayPalPaymentDefaultApplicationJson;
}
