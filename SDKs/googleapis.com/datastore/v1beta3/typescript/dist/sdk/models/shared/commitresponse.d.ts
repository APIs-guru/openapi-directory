import { SpeakeasyBase } from "../../../internal/utils";
import { MutationResult } from "./mutationresult";
/**
 * The response for Datastore.Commit.
**/
export declare class CommitResponse extends SpeakeasyBase {
    commitTime?: string;
    indexUpdates?: number;
    mutationResults?: MutationResult[];
}
