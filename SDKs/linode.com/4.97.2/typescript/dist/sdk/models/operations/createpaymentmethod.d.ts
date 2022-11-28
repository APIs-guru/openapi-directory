import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreatePaymentMethodServerList: readonly ["https://api.linode.com/v4"];
export declare class CreatePaymentMethodRequestBodyData extends SpeakeasyBase {
    cardNumber?: string;
    cvv?: string;
    expiryMonth?: number;
    expiryYear?: number;
}
/**
 * Payment Method Request Object.
**/
export declare class CreatePaymentMethodRequestBody extends SpeakeasyBase {
    data: CreatePaymentMethodRequestBodyData;
    isDefault: boolean;
    type: shared.TypeEnum;
}
export declare class CreatePaymentMethodSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreatePaymentMethodDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreatePaymentMethodRequest extends SpeakeasyBase {
    serverUrl?: string;
    request: CreatePaymentMethodRequestBody;
    security: CreatePaymentMethodSecurity;
}
export declare class CreatePaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPaymentMethod200ApplicationJsonObject?: Map<string, any>;
    createPaymentMethodDefaultApplicationJsonObject?: CreatePaymentMethodDefaultApplicationJson;
}
