import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentMethodsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPaymentMethodsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetPaymentMethodsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetPaymentMethodsIdJsonPathParams;
    queryParams: GetPaymentMethodsIdJsonQueryParams;
}
export declare class GetPaymentMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    paymentMethod?: shared.PaymentMethod;
    statusCode: number;
}
