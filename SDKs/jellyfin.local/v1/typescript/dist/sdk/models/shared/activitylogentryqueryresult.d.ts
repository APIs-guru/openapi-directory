import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityLogEntry } from "./activitylogentry";
export declare class ActivityLogEntryQueryResult extends SpeakeasyBase {
    items?: ActivityLogEntry[];
    startIndex?: number;
    totalRecordCount?: number;
}
