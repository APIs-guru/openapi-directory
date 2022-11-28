import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePaymentSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreatePaymentDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreatePaymentRequest extends SpeakeasyBase {
    request: shared.PaymentRequest;
    security: CreatePaymentSecurity;
}
export declare class CreatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    payment?: shared.Payment;
    statusCode: number;
    createPaymentDefaultApplicationJsonObject?: CreatePaymentDefaultApplicationJson;
}
