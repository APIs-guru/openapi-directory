import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentMethodsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetPaymentMethodsJsonRequest extends SpeakeasyBase {
    queryParams: GetPaymentMethodsJsonQueryParams;
}
export declare class GetPaymentMethodsJsonResponse extends SpeakeasyBase {
    contentType: string;
    paymentMethods?: shared.PaymentMethod[];
    statusCode: number;
}
