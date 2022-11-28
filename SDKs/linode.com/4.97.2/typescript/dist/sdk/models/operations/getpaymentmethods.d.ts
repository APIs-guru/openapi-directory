import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetPaymentMethodsServerList: readonly ["https://api.linode.com/v4", "https://api.linode.com/v4beta"];
export declare class GetPaymentMethodsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetPaymentMethodsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetPaymentMethods200ApplicationJson extends SpeakeasyBase {
    data?: shared.PaymentMethod[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetPaymentMethodsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetPaymentMethodsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetPaymentMethodsQueryParams;
    security: GetPaymentMethodsSecurity;
}
export declare class GetPaymentMethodsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPaymentMethods200ApplicationJsonObject?: GetPaymentMethods200ApplicationJson;
    getPaymentMethodsDefaultApplicationJsonObject?: GetPaymentMethodsDefaultApplicationJson;
}
