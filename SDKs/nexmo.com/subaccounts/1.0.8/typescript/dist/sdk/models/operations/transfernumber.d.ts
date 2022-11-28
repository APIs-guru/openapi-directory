import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferNumberPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class TransferNumberSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class TransferNumber401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferNumber409ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferNumber422ApplicationJsonInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class TransferNumber422ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: TransferNumber422ApplicationJsonInvalidParameters[];
    title: string;
    type: string;
}
export declare class TransferNumberRequest extends SpeakeasyBase {
    pathParams: TransferNumberPathParams;
    request: shared.TransferNumberRequest;
    security: TransferNumberSecurity;
}
export declare class TransferNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferNumberResponse?: any;
    transferNumber401ApplicationJsonObject?: TransferNumber401ApplicationJson;
    transferNumber403ApplicationJsonOneOf?: any;
    transferNumber404ApplicationJsonOneOf?: any;
    transferNumber409ApplicationJsonObject?: TransferNumber409ApplicationJson;
    transferNumber422ApplicationJsonObject?: TransferNumber422ApplicationJson;
}
