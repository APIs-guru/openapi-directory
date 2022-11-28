import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetGetTxPathParams extends SpeakeasyBase {
    txid: string;
}
export declare class TestnetGetTxRequest extends SpeakeasyBase {
    pathParams: TestnetGetTxPathParams;
}
export declare class TestnetGetTxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTxResponse?: shared.GetTxResponse;
}
