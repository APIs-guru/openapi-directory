import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * ListSnapshotsResponse is the result of ListSnapshotsRequest.
**/
export declare class ListSnapshotsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    snapshots?: Snapshot[];
}
