import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferBalancePathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class TransferBalanceSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class TransferBalance401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class TransferBalance404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferBalance422ApplicationJsonInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class TransferBalance422ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: TransferBalance422ApplicationJsonInvalidParameters[];
    title: string;
    type: string;
}
export declare class TransferBalanceRequest extends SpeakeasyBase {
    pathParams: TransferBalancePathParams;
    request: shared.TransferBalanceOrCreditRequest;
    security: TransferBalanceSecurity;
}
export declare class TransferBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferBalanceResponse?: any;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    transferBalance401ApplicationJsonObject?: TransferBalance401ApplicationJson;
    transferBalance404ApplicationJsonObject?: TransferBalance404ApplicationJson;
    transferBalance422ApplicationJsonObject?: TransferBalance422ApplicationJson;
}
