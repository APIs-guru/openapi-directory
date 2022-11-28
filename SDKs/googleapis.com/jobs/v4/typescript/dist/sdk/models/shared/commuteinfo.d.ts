import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Commute details related to this job.
**/
export declare class CommuteInfo extends SpeakeasyBase {
    jobLocation?: Location;
    travelDuration?: string;
}
