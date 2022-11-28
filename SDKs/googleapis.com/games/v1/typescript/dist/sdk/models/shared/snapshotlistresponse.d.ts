import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * A third party list snapshots response.
**/
export declare class SnapshotListResponse extends SpeakeasyBase {
    items?: Snapshot[];
    kind?: string;
    nextPageToken?: string;
}
