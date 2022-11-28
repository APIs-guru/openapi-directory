import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferCreditPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class TransferCreditSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class TransferCredit401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class TransferCredit404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferCredit422ApplicationJsonInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class TransferCredit422ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: TransferCredit422ApplicationJsonInvalidParameters[];
    title: string;
    type: string;
}
export declare class TransferCreditRequest extends SpeakeasyBase {
    pathParams: TransferCreditPathParams;
    request: shared.TransferBalanceOrCreditRequest;
    security: TransferCreditSecurity;
}
export declare class TransferCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferCreditResponse?: any;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    transferCredit401ApplicationJsonObject?: TransferCredit401ApplicationJson;
    transferCredit404ApplicationJsonObject?: TransferCredit404ApplicationJson;
    transferCredit422ApplicationJsonObject?: TransferCredit422ApplicationJson;
}
