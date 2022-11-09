import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Snapshot } from "./snapshot";
/**
 * Response for the `ListSnapshots` method.
**/
export declare class ListSnapshotsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    snapshots?: Snapshot[];
}
