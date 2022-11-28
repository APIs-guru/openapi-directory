import { SpeakeasyBase } from "../../../internal/utils";
import { CommitStats } from "./commitstats";
/**
 * The response for Commit.
**/
export declare class CommitResponse extends SpeakeasyBase {
    commitStats?: CommitStats;
    commitTimestamp?: string;
}
