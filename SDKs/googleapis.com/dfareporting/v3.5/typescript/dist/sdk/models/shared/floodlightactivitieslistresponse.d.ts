import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivity } from "./floodlightactivity";
/**
 * Floodlight Activity List Response
**/
export declare class FloodlightActivitiesListResponse extends SpeakeasyBase {
    floodlightActivities?: FloodlightActivity[];
    kind?: string;
    nextPageToken?: string;
}
