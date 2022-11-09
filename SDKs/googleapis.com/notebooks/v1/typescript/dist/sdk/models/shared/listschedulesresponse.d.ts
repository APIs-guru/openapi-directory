import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Schedule } from "./schedule";
/**
 * Response for listing scheduled notebook job.
**/
export declare class ListSchedulesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    schedules?: Schedule[];
    unreachable?: string[];
}
