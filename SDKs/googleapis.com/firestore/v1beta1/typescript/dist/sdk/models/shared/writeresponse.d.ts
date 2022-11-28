import { SpeakeasyBase } from "../../../internal/utils";
import { WriteResult } from "./writeresult";
/**
 * The response for Firestore.Write.
**/
export declare class WriteResponse extends SpeakeasyBase {
    commitTime?: string;
    streamId?: string;
    streamToken?: string;
    writeResults?: WriteResult[];
}
