import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRawTxPathParams extends SpeakeasyBase {
    txid: string;
}
export declare class GetRawTxRequest extends SpeakeasyBase {
    pathParams: GetRawTxPathParams;
}
export declare class GetRawTxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRawTxResponse?: shared.GetRawTxResponse;
}
