import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentMethodPathParams extends SpeakeasyBase {
    paymentMethodNumber: string;
}
export declare class UpdatePaymentMethodRequestBody extends SpeakeasyBase {
    active?: boolean;
    paypalSubject?: string;
}
export declare class UpdatePaymentMethodSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdatePaymentMethodRequest extends SpeakeasyBase {
    pathParams: UpdatePaymentMethodPathParams;
    request?: UpdatePaymentMethodRequestBody;
    security: UpdatePaymentMethodSecurity;
}
export declare class UpdatePaymentMethodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
