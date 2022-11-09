import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GetTxResponse } from "./gettxresponse";
/**
 * Object containing an array of transaction objects
**/
export declare class GetTxsResponse extends SpeakeasyBase {
    pagesTotal?: number;
    txs?: GetTxResponse[];
}
