import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetBroadcastTxRequest extends SpeakeasyBase {
    request: shared.BroadcastTxRequest;
}
export declare class TestnetBroadcastTxResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    broadcastTxResponse?: shared.BroadcastTxResponse;
}
