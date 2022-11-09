import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetTransactionInfoPathParams extends SpeakeasyBase {
    txid: string;
}
export declare class TestnetGetTransactionInfoRequest extends SpeakeasyBase {
    pathParams: TestnetGetTransactionInfoPathParams;
}
export declare class TestnetGetTransactionInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}
