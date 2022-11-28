import { SpeakeasyBase } from "../../../internal/utils";
import { WriteResult } from "./writeresult";
/**
 * The response for Firestore.Commit.
**/
export declare class CommitResponse extends SpeakeasyBase {
    commitTime?: string;
    writeResults?: WriteResult[];
}
