import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for scheduled snapshot creation mechanism.
**/
export declare class ScheduledSnapshotsConfig extends SpeakeasyBase {
    enabled?: boolean;
    snapshotCreationSchedule?: string;
    snapshotLocation?: string;
    timeZone?: string;
}
