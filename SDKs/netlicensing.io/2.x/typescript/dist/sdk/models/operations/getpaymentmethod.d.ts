import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPaymentMethodPathParams extends SpeakeasyBase {
    paymentMethodNumber: string;
}
export declare class GetPaymentMethodSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetPaymentMethodRequest extends SpeakeasyBase {
    pathParams: GetPaymentMethodPathParams;
    security: GetPaymentMethodSecurity;
}
export declare class GetPaymentMethodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
