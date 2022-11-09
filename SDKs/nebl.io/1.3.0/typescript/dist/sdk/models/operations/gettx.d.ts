import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTxPathParams extends SpeakeasyBase {
    txid: string;
}
export declare class GetTxRequest extends SpeakeasyBase {
    pathParams: GetTxPathParams;
}
export declare class GetTxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTxResponse?: shared.GetTxResponse;
}
