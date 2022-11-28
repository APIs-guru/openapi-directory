import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPathParams extends SpeakeasyBase {
    paymentId: number;
}
export declare class GetPaymentSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetPaymentDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetPaymentRequest extends SpeakeasyBase {
    pathParams: GetPaymentPathParams;
    security: GetPaymentSecurity;
}
export declare class GetPaymentResponse extends SpeakeasyBase {
    contentType: string;
    payment?: shared.Payment;
    statusCode: number;
    getPaymentDefaultApplicationJsonObject?: GetPaymentDefaultApplicationJson;
}
