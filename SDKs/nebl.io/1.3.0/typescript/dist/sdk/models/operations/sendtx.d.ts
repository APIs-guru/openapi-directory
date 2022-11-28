import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendTxRequest extends SpeakeasyBase {
    request: shared.SendTxRequest;
}
export declare class SendTxResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    broadcastTxResponse?: shared.BroadcastTxResponse;
}
