import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to create a snapshot of a job.
**/
export declare class SnapshotJobRequest extends SpeakeasyBase {
    description?: string;
    location?: string;
    snapshotSources?: boolean;
    ttl?: string;
}
