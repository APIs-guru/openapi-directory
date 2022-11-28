import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetGetRawTxPathParams extends SpeakeasyBase {
    txid: string;
}
export declare class TestnetGetRawTxRequest extends SpeakeasyBase {
    pathParams: TestnetGetRawTxPathParams;
}
export declare class TestnetGetRawTxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRawTxResponse?: shared.GetRawTxResponse;
}
