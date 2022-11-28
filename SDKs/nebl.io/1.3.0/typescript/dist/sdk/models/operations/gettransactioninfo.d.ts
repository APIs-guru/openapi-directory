import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionInfoPathParams extends SpeakeasyBase {
    txid: string;
}
export declare class GetTransactionInfoRequest extends SpeakeasyBase {
    pathParams: GetTransactionInfoPathParams;
}
export declare class GetTransactionInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}
