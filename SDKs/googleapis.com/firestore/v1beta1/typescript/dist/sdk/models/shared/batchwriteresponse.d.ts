import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { WriteResult } from "./writeresult";
/**
 * The response from Firestore.BatchWrite.
**/
export declare class BatchWriteResponse extends SpeakeasyBase {
    status?: Status[];
    writeResults?: WriteResult[];
}
