import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTransactionPathParams extends SpeakeasyBase {
    transactionNumber: string;
}
export declare class GetTransactionSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetTransactionRequest extends SpeakeasyBase {
    pathParams: GetTransactionPathParams;
    security: GetTransactionSecurity;
}
export declare class GetTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
